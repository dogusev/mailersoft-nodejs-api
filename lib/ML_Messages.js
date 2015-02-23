var ML_Rest_Base = require('./base/ML_Rest_Base');
var inherits = require('util').inherits;
function ML_Messages($api_key) {
    this.$fromName;
    this.$fromEmail;
    this.$variables = {};
    this.$id;
    this.$recipientEmail;
    this.$recipientName;
    this.$type;
    this.$language;
    this.batchRecipients = [];
    this.$attachments;
    this.$replyToEmail;
    this.$replyToName;
    this.$isTest = 0;
    this.$tag;
    this.name = 'messages';
    
    ML_Rest_Base.call(this);
    var $this = this;
    this.apiKey = $api_key;
    this.path = this.url + this.name + '/';

    this.setTest = function () {
        this.isTest = 1;
        return this;
    };
    this.setRecipient = function ($email, $name) {
        this.recipientEmail = $email;
        this.recipientName = $name;
        return this;
    };
    this.setFromName = function ($name) {
        $this.fromName = $name;
        return this;
    }
    this.setFromEmail = function ($email) {
        $this.fromEmail = $email;
        return this;
    }

    this.setVariables = function ($variables) {
        for (var $name in $variables) {
            $this.setVariable($name, $variables[$name]);
        }

        return this;
    }
    this.setVariable = function ($name, $value) {
        if(!$this.variables) {
            $this.variables = {};
        }
        $this.variables[$name] = $value;
        return this;
    }
    this.setTag = function ($tag) {
        $this.tag = $tag;
        return this;
    }
    this.setId = function ($id) {
        $this.id = $id;
        return this;
    }
    this.setType = function ($type) {
        $this.type = $type;
        return this;
    }
    this.setLanguage = function ($code) {
        $this.language = $code;
        return this;
    }
    this.addRecipient = function ($recipient) {
        if ($recipient['email']) {
            $recipient['recipientEmail'] = $recipient['email'];
           
        }
        if ($recipient['name']) {
            $recipient['recipientName'] = $recipient['name'];
            
        }
        $this.batchRecipients.push($recipient);
        return this;

    }
    this.addRecipients = function ($recipients) {
        for (var i = 0; i < $recipients.length; i++) {
            var $recipient = $recipients[i];
            $this.addRecipient($recipient);
        }
        return this;
    }
    this.setReplyTo = function ($email, $name) {
        $this.replyToEmail = $email;
        $this.replyToName = $name;
        return this;
    }
    this.addAttachment = function ($filename, $content) {
        $this.attachments = {'filename': $filename, 'content': $content};
        return this;
    }
    this.send = function (cb) {
        var $data = {
            'apiKey': $this.apiKey,
            'id': $this.id,
            'language': $this.language,
            'fromName': $this.fromName,
            'fromEmail': $this.fromEmail
        };
        if ($this.batchRecipients) {
            $data['batch'] = $this.batchRecipients;
        } else {
            $data['recipientName'] = $this.recipientName;
            $data['recipientEmail'] = $this.recipientEmail;
            $data['variables'] = $this.variables;
            $data['attachments'] = $this.attachments;
            $data['fromName'] = $this.fromName;
            $data['fromEmail'] = $this.fromEmail;
            $data['tag'] = $this.tag;
        }
        $this.execute('POST', {form: $data}, cb);
    }













}









module.exports = ML_Messages;