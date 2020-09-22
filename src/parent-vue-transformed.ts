import Vue from 'vue'

const __vlsComponent = Vue.extend({
  props: {
    myStr: String,
    myNum: Number
  }
})

export declare const __vlsRenderHelper: {
  <T>(Component: (new (...args: any[]) => T), fn: (this: T) => any): any;
};
export interface __vlsComponentData<T> {
  props: Record<string, any>;
}
interface __vlsComponentData__child<T> extends __vlsComponentData<T> {
  props: { str: 'foo' | 'bar'; num: number; [other: string]: any }
}
declare const __vlsComponentHelper__child: {
  <T>(
    vm: T,
    tag: string,
    data: __vlsComponentData__child<Record<string, any>> & ThisType<T>,
    children: any[]
  ): any
}

__vlsRenderHelper(__vlsComponent, function () {
  __vlsComponentHelper__child(
    this,
    'child',
    { props: { str: this.myStr, num: 42 } },
    []
  )
})
