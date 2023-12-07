<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer>
    <div class="container md:w-[72rem] mx-auto w-full flex flex-col text-center justify-center gap-4 py-6 ">
      <div class="container">
        <div class="flex flex-col gap-8 mx-3 md:flex-row md:m-0">
          <!-- Main -->
          <div class="category">
            <RouterLink to="/">
              <img src="@/assets/img/logo/logo-gold.png" alt="logo" class="h-8 drop-shadow-lg" />
            </RouterLink>
            <p class="mt-4 text-sm font-normal leading-6 text-left text-slate-400">
              iCon merupakan Digital Creative House Production di Yogyakarta
              yang bertujuan membantu bisnis dalam melakukan Digital Marketing
              dengan berbagai layanan terbaik.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.041414598978!2d110.36561707839421!3d-7.920082144492036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a54f8c850f557%3A0x17724c4166ed7232!2sImogiri%2C%20Paduresan%2C%20Imogiri%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1701916889161!5m2!1sen!2sid"
              style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              class="w-full mt-5 h-3/6"></iframe>
          </div>

          <!-- Company -->
          <div class="category basis-4/12">
            <h5 class="text-base text-left">Company</h5>
            <ul class="flex flex-col gap-3 mt-2 text-left">
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Beranda</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Tentang Kami</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Jadi Mitra Kami</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Portofolio</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Careers</a>
              </li>
            </ul>
          </div>

          <!-- Our Solution -->
          <div class="category basis-4/12">
            <h5 class="text-base text-left">Our Solution</h5>
            <ul class="flex flex-col gap-3 mt-2 text-left">
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Digital Marketing</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Branding & Design</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Video Production</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Photography</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Website Solution</a>
              </li>
              <li>
                <a href="/" class="text-sm font-light text-slate-500 hover:text-amber-600">Invitation</a>
              </li>
            </ul>
          </div>

          <!-- Get In Touch -->
          <div class="category basis-5/12">
            <h5 class="text-base text-left">Get In Touch</h5>
            <ul class="flex flex-col gap-3 mt-2 text-left">
              <li>
                <div class="flex flex-row gap-2 title">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  <a href="/" class="text-sm font-light text-slate-800 hover:text-amber-600">Email</a>
                </div>
                <div class="flex flex-row gap-1 mt-1 value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  <p class="text-sm text-slate-500 font-extralight">
                    icon@production.co.id
                  </p>
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-2 title">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path
                      d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                    <path
                      d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                  </svg>

                  <a href="/" class="text-sm font-light text-slate-800 hover:text-amber-600">WhatsApp Call/Text</a>
                </div>
                <div class="flex flex-row gap-1 mt-1 value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  <p class="text-sm text-slate-500 font-extralight">
                    +6281000888765
                  </p>
                </div>
              </li>
              <li>
                <div class="flex flex-row gap-2 title">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.453 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.58 5a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 017.58 5zm5.59 2.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z"
                      clip-rule="evenodd" />
                  </svg>

                  <a href="/" class="text-sm font-light text-slate-800 hover:text-amber-600">Office Yogyakarta</a>
                </div>
                <div class="flex flex-row gap-1 mt-1 value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  <p class="text-sm text-slate-500 font-extralight">
                    Jl.Siluk-Panggang, Imogiri, Bantul, Yogyakarta
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p class="pt-5 mt-5 text-xs text-gray-500 border-t-2 sm:text-sm font-extralight border-slate-200">
        Build 2023 ian Creative Production Corp All rights reserved.
      </p>

    </div>
  </footer>
</template>

<style scoped></style>
