<template>
  <div class="grid">
    <form id="search" class="maxW_1024">
      <div class="search-bar">
        <i class="fa fa-lg fa-search"></i>
        <input name="query" v-model="searchQuery" placeholder="Search">
      </div>
      <div class="query-count">
        <p>{{filteredList.length}} / {{gridTotal}}</p>
      </div>
    </form>
    <div class="grid__table maxW_1024">
      <table class="table table-hover table-responsive">
        <thead>
          <tr class="">
            <th v-for="key in columnKeys"
		          @click="sortBy(key);"
		          :key="key.id">
		          {{ key | capitalize }}
		          <span class="arrow" :class="currentSortDir === 'asc' ? 'asc' : 'dsc'">
		          </span>
		        </th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="data in filteredList" :key="data.id.value">
            <td scope="row"><p>{{data.name.first | capitalize }}</p> <p>{{data.name.last | capitalize }}</p></td>
            <td>{{data.gender | capitalize }}</td>
            <td>{{data.dob | date }}</td>
            <td>{{data.location.city | capitalize }}</td>
            <td>{{data.location.state | capitalize }}</td>
            <td>{{data.phone }}</td>
            <td>{{data.email }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import {
  filterObj,
  filterDOB,
  capitalizeStr,
  flatten
} from "../../utils/helpers.js";
export default {
  name: "Grid",
  data() {
    return {
      columnKeys: ["name", "gender", "DOB", "city", "state", "phone", "email"],
      colData: [],
      currentSort: "",
      currentSortDir: "asc",
      searchQuery: null,
      gridTotal: ""
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    filteredList() {
      let searchWord = this.searchQuery && this.searchQuery.toLowerCase();
      if (searchWord) {
        return this.colData.filter(data => {
          data["city"] = data.location.city;
          data["state"] = data.location.state;
          data["first"] = data.location.first;
          data["last"] = data.location.last;
          return Object.keys(data).some(key => {
            let keyValue = String(data[key]);
            return keyValue.toLowerCase().includes(searchWord);
          });
        });
      }
      if (this.currentSort) {
        return this.colData.slice().sort((a, b) => {
          let count;
          this.currentSortDir === "asc" ? (count = 1) : (count = -1);
          if (this.currentSort === "city") this.currentSort = "location";
          if (this.currentSort === "state") this.currentSort = "location";
          a = a[this.currentSort];
          b = b[this.currentSort];
          return (a === b ? 0 : a > b ? 1 : -1) * count;
        });
      }
      return this.colData;
    }
  },
  filters: {
    capitalize(str) {
      return capitalizeStr(str);
    },
    date(str) {
      return filterDOB(str)[0];
    }
  },
  methods: {
    init() {
      this.getGridData().then(result => {
        if ((result = !200)) {
          console.log("oops");
        } else {
          this.colData = this.gridData.results;
          this.gridTotal = this.colData.length;
        }
      });
    },
    sortBy(key) {
      this.currentSortDir = this.currentSortDir === "asc" ? "dsc" : "asc";
      this.currentSort = key;
    }
  }
};
</script>

<style>
</style>
