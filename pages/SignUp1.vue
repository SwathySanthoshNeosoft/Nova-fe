<template>
  <div>
    <nav
      class="bg-dark-green h-36 flex justify-space-between content-center items-center"
    >
      <div class="m-24">
        <img src="../assets/icons/Nova Logo nav.png" class="w-45 h-20" />
      </div>
      <div class="absolute right-11">
        <div class="flex flex-row justify-center content-center items-center">
          <img src="../assets/icons/Ellipse 8.png" class="" />
          <span class="mx-2.5 w-40 font-poppins text-lg leading-1 text-white"
            >Isaac NINSON</span
          >
          <img src="../assets/icons/Exit.png" class="" />
        </div>
      </div>
    </nav>
    <div
      class="mt-20 w-full h-full flex justify-center content-center items-center"
    >
      <div
        class="divide-y divide-grey w-auto h-auto p-11 shadow-form rounded-xl"
      >
        <h1
          class="pb-5 text-dark-green font-poppins font-light leading-3 text-4xl"
        >
          Sign Up Client
        </h1>
        <div class="form flex flex-col">
          <form>
            <div class="flex flex-col">
              <label for="surname" class="font-poppins mt-10">Surname</label>
              <input
                type="text"
                name="surname"
                class="rounded-3xl bg-input-grey w-96 h-12 focus:outline-none"
              />
            </div>
            <div class="flex flex-col">
              <label
                for="password"
                class="font-poppins mt-10 focus:outline-none"
              >
                Password
              </label>
              <input type="text" name="password" class="password" />
            </div>
            <div
              class="flex flex-col justify-center content-center items-center"
            >
              <button
                class="bg-dark-green text-white mt-9 w-56 border rounded-3xl font-sans p-3.5"
              >
                LOGIN
              </button>
              <button
                class="bg-transparent border-transparent text-orange font-sans label mt-3.5 mb-8"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
