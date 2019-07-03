<template lang="html">
  <booking-form />
  <bookings-grid />
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
