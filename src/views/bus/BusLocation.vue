<template>
  <div>
    <map-line
      :centerPoint="centerPoint"
      :pointList="pointList"
      :mapLevel="13"
    ></map-line>
    <header-back></header-back>
  </div>
</template>
<script>
  import HeaderBack from 'views/bar/HeaderBack'
  import MapLine from 'components/map/Line'
  export default {
    name: 'BusLocation',
    components: {
      HeaderBack,
      MapLine
    },
    data () {
      return {
        centerPoint: {lat: 30.544310, lng: 104.066050, note: '幼儿园'},
        pointList: [
          {lat: 30.544711, lng: 104.064179},
          {lat: 30.500330, lng: 104.052254},
          {lat: 30.555166, lng: 104.046021},
          {lat: 30.542267, lng: 104.056021},
          {lat: 30.544310, lng: 104.066050}
        ],
        mapLevel: 13
      }
    }
  }
</script>
<style lang="less" scoped></style>
