<template>
  <v-row justify="center" no-gutters class="flex-column">
    <v-col class="ml-3 text-center">
      Copyright &copy; 2022. ACME Studio
    </v-col>

    <v-col class="ml-3 mt-3 text-">
      {{ $t('authoring-phrase.intro') }} <v-icon icon="mdi-heart" class="text-red"/>
      {{ $t('authoring-phrase.use') }} <a class="text-white" href="https://next.vuetifyjs.com/en/" target="_blank">Vuetify</a>
      {{ $t('authoring-phrase.author',{brand:'ACME'}) }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "footer-content"
}
</script>

<style scoped>

</style>