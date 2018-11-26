//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
//-----------------------------------------------------------------------------

export class Utils {
    public static notEmpty<TValue>(value : TValue | null | undefined) : value is TValue {
        return value !== null && value !== undefined;
    }

    public static notDuplicate(item, pos, self) {
        return self.indexOf(item) == pos;
    }
}