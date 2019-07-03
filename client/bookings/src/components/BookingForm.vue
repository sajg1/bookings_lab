<template lang="html">
  <div class="booking-form">
    <h3>Guest Detail</h3>
    <form method="post" v-on:submit="addBooking">

      <label for="guestName">Full Name:</label>
      <input type="text" id="guestName" v-model="guestName" required>

      <label for="guestEmail">Email: </label>
      <input type="text" id="guestEmail" v-model="guestEmail" required>

      <label for="checkedIn">Checked In?</label>
      <input  type="checkbox" id="checkedIn" v-model="checkedIn">

      <input type="submit" value="Add Guest">
    </form>
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'booking-form',
  data(){
    return {
      guestName: "",
      guestEmail: "",
      checkedIn: false
    }
  },
  methods: {
    addBooking(evt){
      evt.preventDefault();
      const booking = {
        guestName: this.guestName,
        guestEmail: this.guestEmail,
        checkedIn: this.checkedIn
      }
      BookingsService.postBooking(booking)
      .then(newBooking => eventBus.$emit('new-booking', newBooking))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
