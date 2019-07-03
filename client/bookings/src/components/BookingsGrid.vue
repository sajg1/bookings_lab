<template lang="html">
  <div>
    <h3>Guests</h3>
    <div class="booking-wrapper">
      <booking-card v-for="(booking, index) in bookings" :booking="booking" :key="index"/>
    </div>
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js'
import BookingCard from '@/components/BookingCard'

export default {
  name: 'bookings-grid',
  data(){
    return {
      bookings: [],
    };
  },
  components: {
    'booking-card': BookingCard
  },
  mounted(){
    BookingsService.getBookings()
    .then( bookings => this.bookings = bookings)
  }
}
</script>

<style lang="css" scoped>

  .booking-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
</style>
