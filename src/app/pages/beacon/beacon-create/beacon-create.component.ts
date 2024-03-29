import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import Beacon from '../shared/beacon.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BeaconService } from '../shared/beacon.service';

@Component({
  selector: 'app-beacon-create',
  templateUrl: './beacon-create.component.html',
  styleUrls: ['./beacon-create.component.scss']
})
export class BeaconCreateComponent implements OnInit {

  beacon: Beacon;
  beaconForm: FormGroup;
  currentAction = '';
  isEdit = false;
  submittingForm = false;
  serverErrorMessages: any[];

  constructor(
    private beaconService: BeaconService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildBeaconForm();

    if (this.isEdit) {
      this.loadBeacon();
    }
  }

  submit() {
    const beacon = this.beaconForm.value;

    if (this.isEdit) {
      this.editBeacon(beacon);
    } else {
      this.saveBeacon(beacon);
    }
  }

  // PRIVATE METHODS
  private setCurrentAction() {
    const url = this.router.url;
    this.isEdit = url.includes('edit');

    this.currentAction = this.isEdit ? 'Editar beacon' : 'Novo beacon';
  }

  private buildBeaconForm() {
    this.beaconForm = this.formBuilder.group({
      id: [null],
      code: [null,
        [
          Validators.required
        ]
      ],
      name: [null,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      type: ['none',
        [
          Validators.required
        ]
      ],
      content: ['',
        [
          Validators.maxLength(500)
        ]
      ],
      legend: [null,
        [
          Validators.required,
          Validators.maxLength(256)
        ]
      ]
    });
  }

  private saveBeacon(beacon: Beacon) {
    this.submittingForm = true;
    this.beaconService.create(beacon).subscribe(
      () => {
        this.submittingForm = false;
        this.actionsForSucess();
      },
      error => {
        this.submittingForm = false;
        this.actionsForError(error);
      }
    );
  }

  private editBeacon(beacon: Beacon) {
    this.submittingForm = true;
    this.beaconService.update(beacon).subscribe(
      () => {
        this.actionsForSucess();
      },
      error => {
        this.actionsForError(error);
      }
    );
  }

  private loadBeacon() {
    const beaconId = this.getIdFromUrl();

    this.beaconService.getById(beaconId).subscribe(
      beacon => {
        this.beacon = beacon;
        this.beaconForm.patchValue(beacon);
      },
      error => this.toastrService.error('Falha ao buscar beacon')
    );
  }

  private getIdFromUrl(): number {
    const url = this.router.url;
    const beaconId = +url.split('/')[2];

    return beaconId;
  }

  private actionsForSucess() {
    this.toastrService.success(`Beacon ${this.isEdit ? 'editado' : 'criado'} com sucesso!`);
    this.submittingForm = false;

    if (!this.isEdit) {
      this.beaconForm.reset();
    }
  }

  private actionsForError(error?: any) {
    this.toastrService.error(`Falha ao ${this.isEdit ? 'editar' : 'criar'} beacon!`);
    this.submittingForm = false;

    if (error) {
      this.serverErrorMessages = ['Falha ao processar requisição!'];
    }
  }

}
