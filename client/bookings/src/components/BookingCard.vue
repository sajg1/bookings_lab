<template lang="html">
  <div class="booking-card">
    <h2>{{ booking.guestName }}</h2>
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
