<template>
  <div>
    <LoginHeader />
    <SignUpBody />
    <LoginFooter />
  </div>
</template>

<script lang="ts">
import LoginHeader from 'src/components/LoginHeader.vue';
import SignUpBody from 'src/components/SignUpBody.vue';
import LoginFooter from 'src/components/LoginFooter.vue';

export default {
  name: 'app',
  components: {
    LoginHeader,
    SignUpBody,
    LoginFooter,
  },
};
</script>
