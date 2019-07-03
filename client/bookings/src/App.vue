<template lang="html">
  <div class="">
    <booking-form />
    <bookings-grid />
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm';
import BookingsGrid from '@/components/BookingsGrid';

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'bookings-grid': BookingsGrid
  }
}
</script>

<style lang="css" scoped>
</style>
