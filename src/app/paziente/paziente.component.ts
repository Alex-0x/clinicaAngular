import { Component, OnInit } from '@angular/core';
import { PazienteModel } from '../model/Paziente.model';
import { PazienteService } from '../service/Paziente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.component.html',
  styleUrls: ['./paziente.component.css'],
})
export class PazienteComponent implements OnInit {
  pazienti: PazienteModel[] = [];
  pazienteForm: FormGroup;
  selectedPaziente: PazienteModel | null = null;

  constructor(
    private fb: FormBuilder,
    private pazienteService: PazienteService,
    private router: Router
  ) {
    this.pazienteForm = this.fb.group({
      codice_fiscale: ['', Validators.required],
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      dataNascita: ['', Validators.required],
      luogoNascita: ['', Validators.required],
      cellulare: ['', Validators.required],
      email: ['', Validators.required],
      indirizzo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.caricaPazienti();
  }

  caricaPazienti() {
    this.pazienteService.GetPazienti().subscribe(
      (pazienti: PazienteModel[]) => {
        console.log('Pazienti recuperati:', pazienti);
        this.pazienti = pazienti;
      },
      (error) => {
        console.error('Errore durante il recupero dei pazienti:', error);
      }
    );
  }

  onSubmit() {
    if (this.pazienteForm.valid) {
      const formData = this.pazienteForm.value;
      if (this.selectedPaziente) {
        this.pazienteService
          .UpdatePaziente(this.selectedPaziente.id, formData)
          .subscribe(
            (response) => {
              console.log('Paziente aggiornato con successo:', response);
              this.caricaPazienti();
              this.resetForm();
            },
            (error) => {
              console.error(
                "Errore durante l'aggiornamento del paziente:",
                error
              );
            }
          );
      } else {
        this.pazienteService.AddPaziente(formData).subscribe(
          (response) => {
            console.log('Paziente aggiunto con successo:', response);
            this.caricaPazienti();
            this.resetForm();
          },
          (error) => {
            console.error("Errore durante l'aggiunta del paziente:", error);
          }
        );
      }
    }
  }

  selezionaPaziente(paziente: PazienteModel) {
    this.selectedPaziente = paziente;
    this.pazienteForm.patchValue(paziente);
  }

  resetForm() {
    this.pazienteForm.reset();
    this.selectedPaziente = null;
  }
  eliminarePaziente(id: number) {
    this.pazienteService.DeletePaziente(id).subscribe(
      (response) => {
        console.log('Paziente eliminato con successo:', response);
        this.caricaPazienti();
        this.resetForm();
      },
      (error) => {
        console.error("Errore durante l'eliminazione del paziente:", error);
      }
    );
  }
}
