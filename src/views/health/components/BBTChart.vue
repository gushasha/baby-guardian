<template>
  <div>
    <v-chart :data="temperatureList">
      <v-scale x />
      <v-scale y :min="0" alias="体温"  />
      <v-point shape="smooth" />
      <v-line shape="smooth"/>
    </v-chart>
  </div>
</template>

<script>
  import { VChart, VLine, VPoint, VScale, VTooltip } from 'vux'

  export default {
    props: ['temperatureList'],
    components: {
      VChart,
      VLine,
      VScale,
      VPoint,
      VTooltip
    }
  }
</script>
