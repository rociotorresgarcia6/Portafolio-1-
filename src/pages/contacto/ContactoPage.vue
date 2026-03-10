<script setup lang="ts">
import { ref } from 'vue'
import { Instagram, Mail, Phone } from 'lucide-vue-next'

const companyName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const handleSend = () => {
  companyName.value = ''
  email.value = ''
  phone.value = ''
  message.value = ''
}
</script>

<template>
  <section class="min-h-[calc(100vh-73px)] w-full bg-[#f8f8f8]">
    <div class="mx-auto w-full max-w-[1400px] px-5 pt-5 pb-8 sm:px-6 sm:pt-6 sm:pb-10">
      <div class="grid gap-10 lg:grid-cols-[minmax(360px,1fr)_minmax(420px,610px)] lg:items-start">
        <div class="flex flex-col lg:min-h-[680px]">
          <div>
            <p class="pl-0 font-['Helvetica_Neue'] text-[1.12rem] italic leading-tight text-black sm:text-[1.32rem]">
              Oh! I think they're calling you...
            </p>
            <div class="relative mt-2 -ml-2 w-full max-w-[350px] sm:mt-3 sm:-ml-3 sm:max-w-[420px]">
              <img
                src="/images/llamada3.png"
                alt="Ilustracion de llamada"
                class="block w-full"
              />
            </div>
          </div>

          <div class="mt-auto pt-4">
            <p class="flex items-center gap-2 font-['Helvetica_Neue'] text-[1.05rem] italic text-black sm:text-[1.2rem]">
              <Mail class="size-4 sm:size-5" aria-hidden="true" />
              rociotorresgarcia6@gmail.com
            </p>
            <p class="mt-3 flex items-center gap-2 font-['Helvetica_Neue'] text-[1.05rem] italic text-black sm:text-[1.2rem]">
              <Instagram class="size-4 sm:size-5" aria-hidden="true" />
              rochos___
            </p>
            <p class="mt-3 flex items-center gap-2 font-['Helvetica_Neue'] text-[1.05rem] italic text-black sm:text-[1.2rem]">
              <Phone class="size-4 sm:size-5" aria-hidden="true" />
              610392725
            </p>
          </div>
        </div>

        <form
          class="w-full rounded-[22px] bg-white px-5 py-6 sm:px-7 sm:py-7 lg:min-h-[680px]"
          @submit.prevent="handleSend"
        >
          <h2 class="text-center font-['Arial_Black',Arial,sans-serif] text-[2.9rem] leading-none text-[#e6c700] sm:text-[3.2rem]">
            rochos
          </h2>

          <div class="mt-7">
            <label class="block font-['Helvetica_Neue'] text-[1.05rem] italic text-[#41baf4] sm:text-[1.28rem]">
              name our company:
            </label>
            <input
              v-model="companyName"
              type="text"
              class="mt-2 h-10 w-full rounded-[10px] bg-[#f8f8f8] px-3 outline-none"
            />
          </div>

          <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <label class="block font-['Helvetica_Neue'] text-[1.05rem] italic text-[#41baf4] sm:text-[1.28rem]">
                email:
              </label>
              <input
                v-model="email"
                type="email"
                class="mt-2 h-10 w-full rounded-[10px] bg-[#f8f8f8] px-3 outline-none"
              />
            </div>
            <div>
              <label class="block font-['Helvetica_Neue'] text-[1.05rem] italic text-[#41baf4] sm:text-[1.28rem]">
                phone:
              </label>
              <input
                v-model="phone"
                type="tel"
                class="mt-2 h-10 w-full rounded-[10px] bg-[#f8f8f8] px-3 outline-none"
              />
            </div>
          </div>

          <div class="mt-7">
            <label class="block font-['Helvetica_Neue'] text-[1.05rem] italic text-[#41baf4] sm:text-[1.28rem]">
              tell me about:
            </label>
            <textarea
              v-model="message"
              class="mt-2 h-[170px] w-full resize-none rounded-[12px] bg-[#f8f8f8] p-3 outline-none sm:h-[190px]"
            ></textarea>
          </div>

          <div class="mt-8 flex justify-center">
            <button
              type="submit"
              class="w-full max-w-[330px] rounded-[12px] bg-[#49b6e5] py-3 text-center font-['Helvetica_Neue'] text-[1.1rem] italic text-white transition duration-200 ease-out hover:scale-105 active:scale-110 sm:text-[1.25rem]"
            >
              send menssage
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
