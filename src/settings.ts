/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class ForceGraphSettings extends DataViewObjectsParser {
    public animation: Animation = new Animation();
    public labels: LabelsSettings = new LabelsSettings();
    public links: LinksSettings = new LinksSettings();
    public nodes: NodesSettings = new NodesSettings();
    public size: SizeSettings = new SizeSettings();
}

export class Animation {
    // cambiato visualizzazione animazione a false
    public show: boolean = false;
}

export class LabelsSettings {
    public show: boolean = true;
    //aggiunto font family label iniziale
    public fontFamily: string = "Segoe UI";
    public fontSize: number = 9;
    // cambiato colore label iniziale a nero
    public color: string = "#0a0a0a";
    public allowEllipsis: boolean = false;
    public allowIntersection: boolean = false;
    // aggiunto background label colore iniziale bianco
    public background: string = "#ffffff";
    //aggiunto opacità label iniziale a valore max = 100
    public transparency: number = 100;
}

export class LinksSettings {
    public showArrow: boolean = false;
    public showLabel: boolean = false;
    public colorLink: LinkColorType = LinkColorType.Interactive;
    public thickenLink: boolean = true;
    public displayUnits: number = 0;
    public decimalPlaces: number = null;
    public styleLink: StyleColorType = StyleColorType.Solid;
}

export enum LinkColorType {
    ByWeight = <any>"By Weight",
    ByLinkType = <any>"By Link Type",
    Interactive = <any>"Interactive"
}

export enum StyleColorType {
    Dotted = <any>"Dotted",
    Dashed = <any>"Dasheds",
    Solid = <any>"Solid"
}

export class NodesSettings {
    public displayImage: boolean = false;
    public defaultImage: string = "Home";
    public imageUrl: string = "";
    public imageExt: string = ".png";
    public nameMaxLength: number = 3;
    public highlightReachableLinks: boolean = false;
    public fill: string = "#cccccc";
    public stroke: string = "#ffffff";
    public size: number = 10;
}

export class SizeSettings {
    public charge: number = -15;
    public boundedByBox: boolean = false;
}