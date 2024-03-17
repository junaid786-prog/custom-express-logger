// exports logging functions

class LOG {
    // methods e, w, i, d
    // logError, logWarning, logInfo, logDebug

    /**
     * @param { String } message 
     */
    static e(message) {
        console.error(message);
    }

    /**
     * @param { String } message 
     */
    static w(message) {
        console.warn(message);
    }

    /**
     * @param { String } message 
     */
    static i(message) {
        console.info(message);
    }

    /**
     * @param { String } message 
     */
    static d(message) {
        console.debug(message);
    }
}

module.exports = LOG;