<template>
  <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
  <ul class="bg-base-200 text-base-content min-h-full w-80 p-4">
    <!-- Sidebar content here -->
    <li class="hover:bg-none">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl font-medium">Filters</p>
        <label for="my-drawer" class="cursor-pointer">
          <v-icon name="io-close-circle-outline" class="icon" scale="1.5" color="#E7F0FA" />
        </label>
      </div>
    </li>

    <!-- <li class="mt-8">
      <div>
        <p>Active Filters</p>
      </div>
    </li> -->

    <li>
      <div class="divider"></div>
    </li>

    <li class="">
      <div class="max-h-[250px] overflow-auto">
        <p class="title-container">Industry</p>
        <div
          class="flex space-x-3 input-menu-item"
          v-for="industryItem in industryList"
          :key="industryItem.value"
        >
          <input
            :id="'industryselected-' + industryItem.value"
            name="industryselected"
            type="checkbox"
            :value="industryItem.value"
            v-model="industryselected"
            class="hidden"
          />
          <label
            :for="'industryselected-' + industryItem.value"
            :class="[
              industryselected.includes(industryItem.value) ? 'text-[#0A65CC]' : 'text-black',
              'w-full cursor-pointer',
            ]"
            >{{ industryItem.label }}</label
          >
        </div>
      </div>
    </li>

    <li>
      <div class="divider"></div>
    </li>

    <li class="">
      <div>
        <p class="title-container">Job Type</p>
        <div
          v-for="jobTypeItem in jobTypeList"
          :key="jobTypeItem.value"
          class="flex space-x-3 input-menu-item"
        >
          <input
            :id="'jobtype-' + jobTypeItem.value"
            name="jobType"
            type="radio"
            :value="jobTypeItem.value"
            v-model="jobType"
          />
          <label :for="'jobtype-' + jobTypeItem.value" class="w-full cursor-pointer">{{
            jobTypeItem.label
          }}</label>
        </div>
      </div>
    </li>

    <li>
      <div class="divider"></div>
    </li>

    <li>
      <div>
        <p class="title-container">Salary(monthly)</p>
        <div class="range-slider">
          <input type="range" min="0" max="20000000" step="1" v-model="minSalary" />
          <input type="range" min="0" max="20000000" step="1" v-model="maxSalary" />
        </div>
        <div class="flex justify-between items-center mt-4">
          <p>Rp{{ getRenderNumber(minSalary) }}</p>
          <p>Rp{{ getRenderNumber(maxSalary) }}</p>
        </div>
      </div>
    </li>

    <li>
      <div class="flex justify-between items-center mt-20">
        <div>
          <input
            type="checkbox"
            name="isRemoteJob"
            class="toggle toggle-primary"
            v-model="isRemote"
          />
          <label for="isRemoteJob" class="ml-2">Remote Job</label>
        </div>
        <label for="my-drawer" class="cursor-pointer">
          <div
            @click="handleSubmitFilter"
            class="bg-[#0A65CC] text-white rounded-sm px-6 py-3 font-semibold cursor-pointer"
          >
            Apply Filter
            <!-- <v-icon name="io-close-circle-outline" class="icon" scale="1.5" color="#E7F0FA" /> -->

            <!-- <span>
              <the-button-vue @on-click-button="handleSubmitFilter">Apply Filter</the-button-vue>
            </span> -->
          </div>
        </label>
      </div>
    </li>
  </ul>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
export default {
  components: { TheButtonVue },
  data() {
    return {
      jobTypeList: [
        {
          value: 'full-time',
          label: 'Full Time',
        },
        {
          value: 'part-time',
          label: 'Part Time',
        },
        {
          value: 'internship',
          label: 'Internship',
        },
        {
          value: 'temporary',
          label: 'Temporary',
        },
        {
          value: 'contract-base',
          label: 'Contract Base',
        },
      ],
      industryList: [
        {
          label: 'Development',
          value: 'development',
        },
        {
          label: 'Business',
          value: 'business',
        },
        {
          label: 'Finance & Accounting',
          value: 'finance-accounting',
        },
        {
          label: 'IT & Software',
          value: 'it-software',
        },
        {
          label: 'Office Productivity',
          value: 'office-productivity',
        },
        {
          label: 'Personal Development',
          value: 'personal-development',
        },
        {
          label: 'Design',
          value: 'design',
        },
        {
          label: 'Marketing',
          value: 'marketing',
        },
        {
          label: 'Photography & Video',
          value: 'photography-video',
        },
      ],
      jobType: null,
      industryselected: [],
      minSalary: 1000000,
      maxSalary: 5000000,
      isRemote: false,
    }
  },
  watch: {
    // jobType() {
    //   console.log('jobtype', this.jobType)
    // },
    // industryselected() {
    //   console.log('industryselected: [],', this.industryselected)
    // },
  },
  computed: {
    minSalary: {
      get: function () {
        var val = parseInt(this.minSalary)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val > this.maxSalary) {
          this.maxSalary = val
        }
        this.minSalary = val
      },
    },
    maxSalary: {
      get: function () {
        var val = parseInt(this.maxSalary)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val < this.minSalary) {
          this.minSalary = val
        }
        this.maxSalary = val
      },
    },
  },
  methods: {
    getRenderNumber(total) {
      const formated = new Intl.NumberFormat().format(total)
      return formated
    },
    handleSubmitFilter() {
      this.$store.dispatch('jobs/handleSetFilter', {
        jobType: this.jobType,
        industryselected: this.industryselected,
        minSalary: this.minSalary,
        maxSalary: this.maxSalary,
        isRemote: this.isRemote,
      })
    },
  },
}
</script>


<style scoped>
.divider {
  margin: 24px 0px;
  height: 1px;
  background: #f1f2f4;
}
.title-container {
  margin-bottom: 8px;
  font-weight: 500;
  color: #0a65cc;
}
.input-menu-item {
  padding: 4px 8px;
  cursor: pointer;
}
.input-menu-item:hover {
  background: #e7f0fa;
  border-radius: 4px;
}

.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 24px;
}

.range-slider input[type='range'] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type='number'] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number']:invalid,
input[type='number']:out-of-range {
  border: 2px solid #ff6347;
}

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
}

input[type='range']:focus {
  outline: none;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: #0a65cc;
}

input[type='range']:focus::-ms-fill-lower {
  background: #0a65cc;
}

input[type='range']:focus::-ms-fill-upper {
  background: #0a65cc;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #0a65cc;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type='range']::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #0a65cc;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #0a65cc;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>