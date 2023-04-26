'use strict';

import {deleteAsync} from "del";
export const reset = function() {
    return deleteAsync(app.path.clean);
}