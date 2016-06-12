const config = require('../jscn');

module.exports = (command, options) => {
    console.log(
        config.meetups
            .map(meetup => `${meetup.id} - ${meetup.title}`)
            .join('\n')
    );
};
