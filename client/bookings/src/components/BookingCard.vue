<template lang="html">
  <div class="booking-card">
    <h4>{{ booking.guestName }}</h4>
    <p>Email: {{ booking.guestEmail }}</p>
    <p>Checked In? {{ booking.checkedIn }}</p>
    <button v-on:click="deleteCard">Delete</button>
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'booking-card',
  props: ['booking'],
  methods: {
    deleteCard(){
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('deleted-booking', this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>

  .booking-card {
    margin: 10px;
  }
</style>
