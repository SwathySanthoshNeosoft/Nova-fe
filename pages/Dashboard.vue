<template>
  <div>
    <Navbar />
    <section class="mt-12 mb-32 h-56 fixed right-24">
      <div
        class="text-white bg-orange flex items-center rounded-3xl font-poppins font-medium text-xl leading-xxs px-12 py-5 signInBtn"
      >
        Sign Up Client
        <img src="../assets/icons/Vector-signIn.png" class="ml-2 w-4 h-4" />
      </div>
    </section>
    <section
      class="pt-32 mt-32 flex justify-center content-center items-center"
    >
      <div class="w-2/3 justify-items-stretch grid-cols-4 gap-20 dash">
        <div class="justify-self-center items-center" @click="salesClick()">
          <div
            class="flex justify-center items-center dashIcon bg-white hover:border-2 hover:border-orange rounded-full"
          >
            <img src="../assets/icons/SalesANDexchangeorange.png" />
          </div>
          <div
            class="text-center text-tangaroa font-poppins font-medium text-sm leading-xxs mt-3.5"
          >
            <p>Sales and Exchange</p>
          </div>
        </div>

        <div class="justify-self-center items-center">
          <div
            class="flex justify-center items-center dashIcon bg-white hover:border-2 hover:border-orange rounded-full"
          >
            <img src="../assets/icons/OnlineOrderOrange.png" />
          </div>
          <div
            class="text-center text-tangaroa font-poppins font-medium text-sm leading-xxs mt-3.5"
          >
            Online Order
          </div>
        </div>

        <div class="justify-self-center items-center">
          <div
            class="flex justify-center items-center dashIcon bg-white hover:border-2 hover:border-orange rounded-full"
          >
            <img src="../assets/icons/product list orange.png" />
          </div>
          <div
            class="text-center text-tangaroa font-poppins font-medium text-sm leading-xxs mt-3.5"
          >
            Product Request
          </div>
        </div>

        <div class="justify-self-center items-center">
          <div
            class="flex justify-center items-center dashIcon bg-white hover:border-2 hover:border-orange rounded-full"
          >
            <img src="../assets/icons/transactions orange.png" />
          </div>
          <div
            class="text-center text-tangaroa font-poppins font-medium text-sm leading-xxs mt-3.5"
          >
            Reports
          </div>
        </div>

        <div class="justify-self-center items-center">
          <div
            class="flex justify-center items-center dashIcon bg-white hover:border-2 hover:border-orange rounded-full"
          >
            <img src="../assets/icons/Inventory orange.png" />
          </div>
          <div
            class="text-center text-tangaroa font-poppins font-medium text-sm leading-xxs mt-3.5"
          >
            Inventory
          </div>
        </div>

        <div class="justify-self-center items-center">
          <div
            class="flex justify-center items-center dashIcon bg-white hover:border-2 hover:border-orange rounded-full"
          >
            <img src="../assets/icons/door to door orange.png" />
          </div>
          <div
            class="text-center text-tangaroa font-poppins font-medium text-sm leading-xxs mt-3.5"
          >
            Door to Door Delivery
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
  methods: {
    salesClick() {
      this.$nuxt.$options.router.push({ path: 'login2' })
    },
  },
}
</script>

<style scoped>
/* .signInBtn {
  display: inline-block;
  background-image: url(../assets/icons/Vector-signIn.png);
  background-repeat: no-repeat;
  background-position: right 16px center;
}
*/
.dash {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.dashIcon {
  width: 138px;
  height: 138px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>
