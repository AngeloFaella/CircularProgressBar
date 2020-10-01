const _text_size_percentage = 0.25;
const ns = 'http://www.w3.org/2000/svg';

/**
 * CircularProgressBar v1.0 
 * by Angelo Faella
 * 
 * A lightweight circular progress bar made with SVG circles and CSS transitions.
 */
class CircularProgressBar{
    
    /**
     * 
     * @param {Number} width width in px
     * @param {Number} height height in px
     * @param {String} container ID of the parent
     * @param {Object} [options] progress bar options 
     * @param {Number} [options.strokeSize=1] size of the stroke
     * @param {String} [options.backgroundColor='black'] background color of the inner circle
     * @param {String} [options.strokeColor='white'] color of the stroke
     * @param {String} [options.centerIcon] icon displayed at the center of the inner circle
     * @param {Boolean} [options.showProgressNumber=false] icon displayed at the center of the inner circle
     * @param {EventListener} [options.oncomplete] callback function invoked when progress reach 100% 
     */
    constructor(width, height, container, options){
        const strokeSize = options.strokeSize || 1;
        const _outer_r_size = width/2 - strokeSize;  
        const _inner_r_size = _outer_r_size-(strokeSize/2); 
        const _stroke_percentage = strokeSize/width;
        const _inner_r_percentage = _inner_r_size/width;
        const _outer_r_percentage = _outer_r_size/width; 

        this._width = width;
        this._container = document.getElementById(container);
        this._container.style.width = width+'px';
        this._container.style.height = height+'px';

        // create outer circle
        let outerSvg = document.createElementNS(ns,'svg');
        outerSvg.setAttribute('class','progress-ring back-ring');
        this._outerCircle = document.createElementNS(ns,'circle');
        this._outerCircle.setAttribute('class','progress-ring__circle');
        this._outerCircle.setAttribute('fill','transparent');
        this._outerCircle.setAttribute('stroke',options.strokeColor || '#fff');
        this._outerCircle.setAttribute('cx','50%');
        this._outerCircle.setAttribute('cy','50%');
        // set dynamic dim
        let strokeW = width*_stroke_percentage;
        this._outerCircle.setAttribute('stroke-width',strokeW);
        let outerRadius = width*_outer_r_percentage;
        this._outerCircle.setAttribute('r',outerRadius);
        outerSvg.appendChild(this._outerCircle);

        
        // create inner circle
        let innerSvg = document.createElementNS(ns,'svg');
        innerSvg.setAttribute('class','progress-ring front-ring');
        this._innerCircle = document.createElementNS(ns,'circle');
        this._innerCircle.setAttribute('class','progress-ring__circle');
        this._innerCircle.setAttribute('fill', options.backgroundColor || 'black');
        this._innerCircle.setAttribute('cx','50%');
        this._innerCircle.setAttribute('cy','50%');
        // set dynamic dim
        let innerRadius = width*_inner_r_percentage;
        this._innerCircle.setAttribute('r',innerRadius);
        innerSvg.appendChild(this._innerCircle);

        // append to _container
        this._container.appendChild(outerSvg);
        this._container.appendChild(innerSvg);

        if(options.centerIcon) this.setCenterIcon(options.centerIcon)
        if(options.showProgressNumber) this.showProgressNumber(true)
        this._oncomplete = options.oncomplete

        // save dim
        this._radius = this._outerCircle.r.baseVal.value;
        this._circumference = this._radius * 2 * Math.PI;
        this._outerCircle.style.strokeDasharray = `${this._circumference} ${this._circumference}`;

        this.setProgress(0);
    }

    /**
     * set color of the inner circle
     * @param {String} color a valid CSS color 
     */
    setBackgroundColor(color){
        this._innerCircle.setAttribute('fill',color);
    }

    /**
     * set color of the stroke
     * @param {String} color a valid CSS color 
     */
    setStrokeColor(color){
        this._outerCircle.setAttribute('stroke',color);
    }

    /**
     * @param {Boolean} enabled boolean to show/hide progress number
     */
    showProgressNumber(enabled){
        if(enabled){
            this._progressText = document.createElement('p');
            this._progressText.setAttribute('class','progress-text');
            this._progressText.style.fontSize = (_text_size_percentage *this._width)+'px';
            this._progressText.innerHTML = ""+this.getProgress();
            this._container.appendChild(this._progressText);
        }
        else{
            if(this._progressText) this._progressText.style.display = 'none';
        }
        
    }

    /**
     * set an image at the center of the progressbar
     * @param {String} src image src
     */
    setCenterIcon(src){
        if(!this._icon){
            this._icon = document.createElement('img');
            this._icon.setAttribute('class','progress-icon');
            this._icon.setAttribute('src',src);
            this._container.appendChild(this._icon);
        }
        else{
            this._icon.setAttribute('src',src);
        }
    }

    /**
     * Set progress of the progressbar (with animation);
     * @param {Number} percent progress percentage
     */
    setProgress(percent) {
        if(percent > 100) return
        this._progress = percent;
        const offset = this._circumference - percent / 100 * this._circumference;
        this._outerCircle.style.strokeDashoffset = offset;
        
        if(this._progressText) 
            this._progressText.innerHTML = this._progress;
        
        if(this._oncomplete)
            this._oncomplete();
    }

    /**
     * Get current progress
     * @returns {Number}
     */
    getProgress(){
        return this._progress || 0;
    }

}