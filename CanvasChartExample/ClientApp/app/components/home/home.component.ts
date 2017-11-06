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
                new bar('#2A9FBC', 50),
                new bar('#F15B2A', 60),
                new bar('#A62E5C', 70)
            ]);
    }
        
    spec: spec;

    ngDoCheck(): void {
        
    } 
}

class spec   {
    constructor(bars: bar[]) {
        this.bars = bars;
    }
    padding: number = 5;
    height: number = 30;
    bars: bar[] =[];

    overallHeight: number = this.bars.length * (this.height + this.padding);

}

class bar {
    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    color: string;
    width: number;
}
