<script setup lang="ts">
const partners = [
  {
    name: "Nadace Via",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/logo_Via.jpg?alt=media&token=00b511c2-4c59-4254-9177-634ff127d05b",
    size: 100,
    href: "https://www.nadacevia.cz/",
  },
  {
    name: "Darujme.cz",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/logo_Darujme.png?alt=media&token=f1531a20-b417-4991-a41e-39a4f6997199",
    size: 100,
    href: "https://www.darujme.cz/",
  },
  {
    name: "Kaufland",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/logo_Kaufland.jpg?alt=media&token=d2e58e40-a7cf-48ac-9bc8-006abb419758",
    size: 100,
    href: "https://www.kaufland.cz/",
  },
  {
    name: "Olomoucký kraj",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/olomoucky_kraj_logo.png?alt=media&token=feb7bb76-9e03-4392-8d5e-1167d5aad385",
    size: 100,
    href: "https://www.olkraj.cz",
  },
  {
    name: "Statutární město Olomouc",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/logo_olomouc.png?alt=media&token=2eb38859-8aa0-49df-a1f2-c7d05e8c1ba9",
    size: 100,
    href: "https://www.olomouc.eu",
  },
  {
    name: "Knihovna města Olomouce",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/logo_knihovna.png?alt=media&token=8652e1a1-ebbb-4983-ad0d-70a690933e99",
    size: 128,
    href: "https://www.kmol.cz/",
  },
  {
    name: "Povodí Moravy",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/povodi_moravy_logo.png?alt=media&token=1e0f33f2-195d-4e0c-b952-bdd02a02cbc9",
    size: 100,
    href: "http://www.pmo.cz",
  },
  {
    name: "Agentura ochrany přírody a krajiny ČR",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/aopk_logo.png?alt=media&token=9343bb65-3804-4bae-a133-8a3207880823",
    size: 100,
    href: "https://www.nature.cz",
  },
  {
    name: "Státní fond životního prostředí ČR",
    logo: "https://firebasestorage.googleapis.com/v0/b/losvesinos-ead8c.appspot.com/o/logo_sfzp.png?alt=media&token=de0a922d-5782-4a69-817c-b99b336a6055",
    size: 100,
    href: "https://www.sfzp.cz",
  },
];
</script>

<template>
  <div class="bg-secondary p-4">
    <a v-for="link in partners" :href="link.href" :key="link.href">
      <img :src="link.logo" :width="`${link.size}`" :height="`${link.size}`" />
      {{ link.name }}
    </a>
  </div>
</template>
