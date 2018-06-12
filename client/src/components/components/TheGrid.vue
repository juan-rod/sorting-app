<template>
  <div class="grid border2">
    <div class="grid__table maxW_1024">
      <form id="search">
        <input name="query" v-model="searchQuery" placeholder="Search by Name or Study">
      </form>
      <table class="table table-hover">
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
          <tr class="" v-for="data in sortedGridData" :key="data.id.value">
            <td scope="row"><p>{{data.name.first | capitalize}}</p> <p>{{data.name.last | capitalize}}</p></td>
            <td>{{data.gender | capitalize}}</td>
            <td>{{data.dob | date}}</td>
            <td>{{data.location.city | capitalize}}</td>
            <td>{{data.location.state | capitalize}}</td>
            <td>{{data.phone}}</td>
            <td>{{data.email}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import { filterObj, filterDOB, capitalizeStr } from "../../utils/helpers.js";
export default {
  name: "Grid",
  data() {
    return {
      columnKeys: ["name", "gender", "dob", "city", "state", "phone", "email"],
      sortKey: "",
      sort: {},
      colData: [],
      currentSort: "",
      currentSortDir: "asc",
      searchQuery: ""
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    sortedGridData() {
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
  },
  filters: {
    capitalize: function(str) {
      return capitalizeStr(str);
    },
    date: function(str) {
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
