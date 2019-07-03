<template lang="html">
  <div class="booking-card">
    <h4>{{ booking.guestName }}</h4>
    <p>Email: {{ booking.guestEmail }}</p>
    <p>Checked In? {{ booking.checkedIn }}</p>
  </div>
</template>

<script>
export default {
  name: 'booking-card',
  props: ['booking']
}
</script>

<style lang="css" scoped>

  .booking-card {
    margin: 10px;
  }
</style>
