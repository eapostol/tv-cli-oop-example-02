let Show = function(obj){

    this._formatDate = function(val){
        // Unixtimestamp
        let unixtimestamp = val;

        // Months array
        const months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        // Convert timestamp to milliseconds
        const date = new Date(unixtimestamp*1000);

        // Year
        const year = date.getFullYear();

        // Month
        const month = months_arr[date.getMonth()];

        // Day
        const day = date.getDate();

        // Hours
        const hours = date.getHours();

        // Minutes
        const minutes = "0" + date.getMinutes();

        // Seconds
        const seconds = "0" + date.getSeconds();

        // Display date time in MM-dd-yyyy h:m:s format
        return convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    };

    this.url = obj.url;
    this.name = obj.name;
    this.type = obj.language;
    this.genres = obj.genres;
    this.premiered = obj.premiered;
    this.network = obj.network.name;
    this.image = obj.image;
    this.summary = obj.summary;
    this.updated = this._formatDate(obj.updated); // this._formatDate has to be defined first.
    this.type = "Show";



    return this;
};

module.exports = Show;
