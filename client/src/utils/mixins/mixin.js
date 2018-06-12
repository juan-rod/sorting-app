import { mapGetters, mapMutations, mapActions } from "vuex";

export const vuex_mixin = {
  computed: {
    ...mapGetters(["user", "isAuth", "gridData", "errors"])
  },
  methods: {
    ...mapActions(["loginUser", "getGridData", "createParticipant"])
  }
};
