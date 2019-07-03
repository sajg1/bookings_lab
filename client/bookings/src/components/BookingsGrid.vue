<template lang="html">

</template>

<script>
import BookingsService from '@/services/BookingsService.js'
export default {
  name: 'bookings-grid',
  data(){
    return {
      bookings: []
    };
  },
  mounted(){
    BookingsService.getBookings()
    .then( bookings => this.bookings = bookings)
  }
}
</script>

<style lang="css" scoped>
</style>
