<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    str: String as PropType<'foo' | 'bar'>,
    num: Number
  }
})
</script>
