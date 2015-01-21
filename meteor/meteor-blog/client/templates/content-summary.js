Template.contentSummary.helpers({
    tagIcon: function() {
        var i = 'fa ';
        switch (this.tag) {
            case 'code':
                i += 'fa-code';
                break;

            case 'configuration':
                i += 'fa-cogs';
                break;

            case 'comments':
                i += 'fa-quote-left';
                break;

            case 'information':
                i += 'fa-exclamation';
                break;

            case 'game':
                i += 'fa-gamepad';
                break;

            default:
                i += 'fa-code';
        }
        return i;
    },
    timestamp: function() {
        var hours = this.postDate.getHours();
        var minutes = this.postDate.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return this.postDate.getMonth()+1 + "/" + this.postDate.getDate() + "/" + this.postDate.getFullYear() + "  " + strTime;
    }
});
