'use strict';

/**
 * httpMap - Common HTTP codes mapped to their message.
 * codeMap - Specific error codes for application errors. Each object has maximum 3 fields
 * message : This will be the error message that will be returned to client. Should be user friendly message.
 * status  : HTTP status.
 * xmsg    : Not sent in response, can be used for internal purposes.
 */

var map = {

  httpMap: {
    400: "Bad Request",
    401: "Login required",
    403: "Forbidden",
    404: "Not Found",
    406: "Validation Error",
    412: "Precondition Failed",
    422: "Unprocessable Entity",
    500: "Unknown Error",
  },

  codeMap: {
    'SEARCH_NR': {
      message : "No search results found for your request.",
      status  : 404,
      xmsg    : "No results"
    },
    'INV_REQ': {
      message : "Invalid Request Attempt",
      status  : 412,
      xmsg    : "Invalid Request Parameters"
    },
    'NO_BODY_FE' : {
      message : "No request body found",
      status  : 400
    },
    'NO_DATA_FE' : {
      message : "No request data found",
      status  : 400
    },

    /*-------------------------------------------------------------------------------
    Database Side Errors - Prefixed with DB. Such errors should only be added below.
    ---------------------------------------------------------------------------------*/
    'DB_IE' : {
      message : "Error in insertion",
      status  : 500,
      xmsg    : "DB insertion error"
    },
    'DB_NDF_FE' : {
      message : "No data found while fetching from db",
      status  : 404
    }

}

};

module.exports = map;
