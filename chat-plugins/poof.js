const messages = [
"didn't get a cool message because none have been added!"
"has vanished into nothingness!",
"used Explosion!",
"fell into the void.",
"went into a cave without a repel!",
"has left the building.",
"was forced to give Justice's Miles's mom an oil massage!",
"was hit by andrea medicham!",
"ate a bomb!",
"is blasting off again!",
"(Quit: oh god how did this get here i am not good with computer)",
"was unfortunate and didn't get a cool message.",
"Sunding accidently kicked {{user}} from the server!",
"{{user}}, Bin Laden just fucked you up!"
];

exports.commands = {
d: 'poof',
cpoof: 'poof',
poof: function (target, room, user) {
if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
if (target && !this.can('broadcast')) return false;
if (room.id !== 'lobby') return false;
var message = target || messages[Math.floor(Math.random() * messages.length)];
if (message.indexOf('{{user}}') < 0)
message = '{{user}} ' + message;
message = message.replace(/{{user}}/g, user.name);
if (!this.canTalk(message)) return false;
var colour = '#' + [1, 1, 1].map(function () {
var part = Math.floor(Math.random() * 0xaa);
return (part < 0x10 ? '0' : '') + part.toString(16);
}).join('');
room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
user.disconnectAll();
},
poofoff: 'nopoof',
nopoof: function () {
if (!this.can('poofoff')) return false;
Config.poofOff = true;
return this.sendReply("Poof is now disabled.");
},
poofon: function () {
if (!this.can('poofoff')) return false;
Config.poofOff = false;
return this.sendReply("Poof is now enabled.");
}
};
