<template>
  <v-app>
    <v-container>
      <h1 class="text-center">Étudiants</h1>
      <v-row>
        <v-col
          v-for="etudiant in etudiants"
          :key="etudiant._id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="mx-auto" max-width="400">
            <v-card-title>
              <v-avatar class="mr-3" size="40" color="primary">
                <span>
                  {{ getInitials(etudiant.prenom, etudiant.nom) }}
                </span>
              </v-avatar>
              <div>
                <div>{{ etudiant.nom || 'N/A' }} {{ etudiant.prenom || 'N/A' }}</div>
                <small class="grey--text">{{ etudiant.classe || 'N/A' }}</small>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <div>Âge : {{ etudiant.age || 'N/A' }}</div>
            </v-card-subtitle>
            <v-card-text>
              <p>Portable : {{ etudiant.portable || 'N/A' }}</p>
              <p>Voiture : {{ etudiant.voiture || 'N/A' }}</p>
              <p>Adresse : 
                <template v-if="etudiant.adresse">
                  {{ etudiant.adresse.adresserue }}, {{ etudiant.adresse.adresseville }} {{ etudiant.adresse.codepostal }}
                </template>
                <template v-else>
                  N/A
                </template>
              </p>
              <p>Notes de Math : {{ etudiant.math ? etudiant.math.join(', ') : 'N/A' }}</p>
              <p>Notes d'Anglais : {{ etudiant.anglais ? etudiant.anglais.join(', ') : 'N/A' }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-form @submit.prevent="addEtudiant">
        <v-text-field v-model="newEtudiant.nom" label="Nom" required></v-text-field>
        <v-text-field v-model="newEtudiant.prenom" label="Prénom" required></v-text-field>
        <v-text-field v-model="newEtudiant.age" label="Âge" type="number" required></v-text-field>
        <v-text-field v-model="newEtudiant.portable" label="Portable"></v-text-field>
        <v-text-field v-model="newEtudiant.voiture" label="Voiture"></v-text-field>
        <v-text-field v-model="newEtudiant.adresse.adresserue" label="Adresse Rue" required></v-text-field>
        <v-text-field v-model="newEtudiant.adresse.adresseville" label="Adresse Ville" required></v-text-field>
        <v-text-field v-model="newEtudiant.adresse.codepostal" label="Code Postal" required></v-text-field>
        <v-text-field v-model="newEtudiant.classe" label="Classe" required></v-text-field>
        <v-btn type="submit" color="primary">Ajouter Étudiant</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { VAvatar, VCard, VCardTitle, VCardSubtitle, VCardText, VForm, VTextField, VBtn, VContainer, VRow, VCol } from 'vuetify/components';

export default defineComponent({
  components: {
    VAvatar,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VForm,
    VTextField,
    VBtn,
    VContainer,
    VRow,
    VCol
  },
  data() {
    return {
      etudiants: [],
      newEtudiant: {
        nom: '',
        prenom: '',
        age: null,
        portable: '',
        voiture: '',
        adresse: {
          adresserue: '',
          adresseville: '',
          codepostal: ''
        },
        classe: '',
        math: [],
        anglais: []
      }
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/etudiants');
      this.etudiants = response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données : ", error);
    }
  },
  methods: {
    async addEtudiant() {
      try {
        const response = await axios.post('http://localhost:3000/etudiants', this.newEtudiant);
        this.etudiants.push(response.data);
        this.newEtudiant = {
          nom: '',
          prenom: '',
          age: null,
          portable: '',
          voiture: '',
          adresse: {
            adresserue: '',
            adresseville: '',
            codepostal: ''
          },
          classe: '',
          math: [],
          anglais: []
        };
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'étudiant : ", error);
      }
    },
    getInitials(prenom: string, nom: string): string {
      const firstInitial = prenom && prenom.length > 0 ? prenom[0].toUpperCase() : '';
      const lastInitial = nom && nom.length > 0 ? nom[0].toUpperCase() : '';
      return firstInitial + lastInitial;
    }
  }
});
</script>