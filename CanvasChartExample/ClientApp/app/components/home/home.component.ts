import { Component, DoCheck} from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements DoCheck  {
    //My Canvas App Example

    title: string;
    color: string;
    width: number;

    constructor() {
        this.title = 'My SVG App Example';

        this.spec = new spec(
            [
                new bar('#2A9FBC', 50, "September"),
                new bar('#F15B2A', 60, "October"),
                new bar('#A62E5C', 150, "November")
            ]);
    }
        
    spec: spec;

    ngDoCheck(): void {
        this.spec.overallHeight = this.spec.bars.length * (1 * this.spec.height + this.spec.padding);

        let ctx = document.createElement('canvas').getContext('2d');
       
        
        for (let bar of this.spec.bars) {

            if (!(ctx == null)) {
                ctx.font = this.spec.fontStyle;
                this.spec.labelWidth = Math.max(this.spec.labelWidth, ctx.measureText(bar.text).width);
            }

            this.spec.overallWidth = Math.max(this.spec.overallWidth, bar.width);
            
        }
    } 


}

class spec   {
    constructor(bars: bar[]) {
        this.bars = bars;
    }
    padding: number = 5;
    height: number = 30;
    bars: bar[] =[];

    overallHeight: number = 0;
    overallWidth: number = 0;
    fontStyle: string = "arial 10pt";
    labelWidth: number =0;
}

class bar {
    constructor(color: string, width: number, text: string) {
        this.color = color;
        this.width = width;
        this.text = text;
    }

    color: string;
    width: number;
    text: string;
}
