var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="JSGeometry.ts"/>
    /**
    * For Internal Use
    * Create AutoCAD namespace
    *
    */
    (function (AutoCAD) {
        /**
        * This enum wraps the Acad::PromptStatus ObjectARX class.
        *
        */
        (function (PromptStatus) {
            PromptStatus[PromptStatus["None"] = 5000] = "None";
            PromptStatus[PromptStatus["OK"] = 5100] = "OK";
            PromptStatus[PromptStatus["Modeless"] = 5027] = "Modeless";
            PromptStatus[PromptStatus["Error"] = -5001] = "Error";
            PromptStatus[PromptStatus["Cancel"] = -5002] = "Cancel";
            PromptStatus[PromptStatus["Rejected"] = -5003] = "Rejected";
            PromptStatus[PromptStatus["Failed"] = -5004] = "Failed";
            PromptStatus[PromptStatus["Keyword"] = -5005] = "Keyword";
            PromptStatus[PromptStatus["Direct"] = -5999] = "Direct";
        })(AutoCAD.PromptStatus || (AutoCAD.PromptStatus = {}));
        var PromptStatus = AutoCAD.PromptStatus;
        ;

        /**
        * This JSAPI enum wraps resbuf type. This enumeration provides values that
        * describe the value data type of a system variable.
        *
        */
        (function (ResultValueType) {
            ResultValueType[ResultValueType["RTNONE"] = 5000] = "RTNONE";
            ResultValueType[ResultValueType["RTREAL"] = 5001] = "RTREAL";
            ResultValueType[ResultValueType["RTPOINT"] = 5002] = "RTPOINT";
            ResultValueType[ResultValueType["RTSHORT"] = 5003] = "RTSHORT";
            ResultValueType[ResultValueType["RTANG"] = 5004] = "RTANG";
            ResultValueType[ResultValueType["RTSTR"] = 5005] = "RTSTR";
            ResultValueType[ResultValueType["RTORINT"] = 5008] = "RTORINT";
            ResultValueType[ResultValueType["RT3DPOINT"] = 5009] = "RT3DPOINT";
            ResultValueType[ResultValueType["RTLONG"] = 5010] = "RTLONG";
        })(AutoCAD.ResultValueType || (AutoCAD.ResultValueType = {}));
        var ResultValueType = AutoCAD.ResultValueType;
        ;

        /**
        * This enum lists the drag status for jigging.
        *
        */
        (function (DragStatus) {
            DragStatus[DragStatus["kModeless"] = -17] = "kModeless";
            DragStatus[DragStatus["kNoChange"] = -6] = "kNoChange";
            DragStatus[DragStatus["kCancel"] = -4] = "kCancel";
            DragStatus[DragStatus["kOther"] = -3] = "kOther";
            DragStatus[DragStatus["kNull"] = -1] = "kNull";
            DragStatus[DragStatus["kNormal"] = 0] = "kNormal";
            DragStatus[DragStatus["kKW1"] = 1] = "kKW1";
            DragStatus[DragStatus["kKW2"] = 2] = "kKW2";
            DragStatus[DragStatus["kKW3"] = 3] = "kKW3";
            DragStatus[DragStatus["kKW4"] = 4] = "kKW4";
            DragStatus[DragStatus["kKW5"] = 5] = "kKW5";
            DragStatus[DragStatus["kKW6"] = 6] = "kKW6";
            DragStatus[DragStatus["kKW7"] = 7] = "kKW7";
            DragStatus[DragStatus["kKW8"] = 8] = "kKW8";
            DragStatus[DragStatus["kKW9"] = 9] = "kKW9";
        })(AutoCAD.DragStatus || (AutoCAD.DragStatus = {}));
        var DragStatus = AutoCAD.DragStatus;
        ;

        /**
        * This enum lists the cursor types that may be used while dragging.
        *
        */
        (function (DragCursor) {
            DragCursor[DragCursor["Normal"] = 0] = "Normal";
            DragCursor[DragCursor["None"] = 1] = "None";
            DragCursor[DragCursor["Selection"] = 2] = "Selection";
        })(AutoCAD.DragCursor || (AutoCAD.DragCursor = {}));
        var DragCursor = AutoCAD.DragCursor;
        ;

        /**
        * This enum wraps the AcEdJig::CursorType ObjectARX enum. It gives the type of cursor that are available.
        *
        */
        (function (CursorType) {
            CursorType[CursorType["kNoSpecialCursor"] = -1] = "kNoSpecialCursor";
            CursorType[CursorType["kCrosshair"] = 0] = "kCrosshair";
            CursorType[CursorType["kRectCursor"] = 1] = "kRectCursor";
            CursorType[CursorType["kRubberBand"] = 2] = "kRubberBand";
            CursorType[CursorType["kNotRotated"] = 3] = "kNotRotated";
            CursorType[CursorType["kTargetBox"] = 4] = "kTargetBox";
            CursorType[CursorType["kRotatedCrosshair"] = 5] = "kRotatedCrosshair";
            CursorType[CursorType["kInvisible"] = 7] = "kInvisible";
            CursorType[CursorType["kEntitySelect"] = 8] = "kEntitySelect";
            CursorType[CursorType["kParallelogram"] = 9] = "kParallelogram";
            CursorType[CursorType["kEntitySelectNoPersp"] = 10] = "kEntitySelectNoPersp";
            CursorType[CursorType["kPkfirstOrGrips"] = 11] = "kPkfirstOrGrips";
        })(AutoCAD.CursorType || (AutoCAD.CursorType = {}));
        var CursorType = AutoCAD.CursorType;
        ;

        /**
        * This enum lists the transient cursor types that are available. They are the operating system cursors.
        *
        */
        AutoCAD.TransientCursorType = {
            "kNone": "None",
            "kArrow": "Arrow",
            "kIbeam": "Ibeam",
            "kWait": "Wait",
            "kCross": "Cross",
            "kUpArrow": "UpArrow",
            "kSizeNWSE": "SizeNWSE",
            "kSizeNESW": "SizeNESW",
            "kSizeWE": "SizeWE",
            "kSizeNS": "SizeNS",
            "kSizeAll": "SizeAll",
            "kNo": "No",
            "kHand": "Hand",
            "kAppStarting": "AppStarting",
            "kHelp": "Help"
        };

        /**
        * This enum wraps the AcEdJig::UserInputControls ObjectARX class.
        * Returns the bitwise OR'd value of all user input control settings in effect at the present time for this particular jig.
        *
        */
        (function (UserInputControls) {
            UserInputControls[UserInputControls["kGovernedByOrthoMode"] = 0x000001] = "kGovernedByOrthoMode";
            UserInputControls[UserInputControls["kNullResponseAccepted"] = 0x000002] = "kNullResponseAccepted";
            UserInputControls[UserInputControls["kDontEchoCancelForCtrlC"] = 0x000004] = "kDontEchoCancelForCtrlC";
            UserInputControls[UserInputControls["kDontUpdateLastPoint"] = 0x000008] = "kDontUpdateLastPoint";
            UserInputControls[UserInputControls["kNoDwgLimitsChecking"] = 0x000010] = "kNoDwgLimitsChecking";
            UserInputControls[UserInputControls["kNoZeroResponseAccepted"] = 0x000020] = "kNoZeroResponseAccepted";
            UserInputControls[UserInputControls["kNoNegativeResponseAccepted"] = 0x000040] = "kNoNegativeResponseAccepted";
            UserInputControls[UserInputControls["kAccept3dCoordinates"] = 0x000080] = "kAccept3dCoordinates";
            UserInputControls[UserInputControls["kAcceptMouseUpAsPoint"] = 0x000100] = "kAcceptMouseUpAsPoint";
            UserInputControls[UserInputControls["kAnyBlankTerminatesInput"] = 0x000200] = "kAnyBlankTerminatesInput";
            UserInputControls[UserInputControls["kInitialBlankTerminatesInput"] = 0x000400] = "kInitialBlankTerminatesInput";
            UserInputControls[UserInputControls["kAcceptOtherInputString"] = 0x000800] = "kAcceptOtherInputString";
            UserInputControls[UserInputControls["kGovernedByUCSDetect"] = 0x001000] = "kGovernedByUCSDetect";
            UserInputControls[UserInputControls["kNoZDirectionOrtho"] = 0x002000] = "kNoZDirectionOrtho";
            UserInputControls[UserInputControls["kImpliedFaceForUCSChange"] = 0x004000] = "kImpliedFaceForUCSChange";
            UserInputControls[UserInputControls["kUseBasePointElevation"] = 0x008000] = "kUseBasePointElevation";
            UserInputControls[UserInputControls["kDisableDirectDistanceInput"] = 0x010000] = "kDisableDirectDistanceInput";
        })(AutoCAD.UserInputControls || (AutoCAD.UserInputControls = {}));
        var UserInputControls = AutoCAD.UserInputControls;
        ;

        /**
        * This enum lists the return result from Task Dialog
        *
        */
        (function (TaskDialogResult) {
            TaskDialogResult[TaskDialogResult["kRetOk"] = 1] = "kRetOk";
            TaskDialogResult[TaskDialogResult["kRetCancel"] = 2] = "kRetCancel";
            TaskDialogResult[TaskDialogResult["kRetAbort"] = 3] = "kRetAbort";
            TaskDialogResult[TaskDialogResult["kRetRetry"] = 4] = "kRetRetry";
            TaskDialogResult[TaskDialogResult["kRetIgnore"] = 5] = "kRetIgnore";
            TaskDialogResult[TaskDialogResult["kRetYes"] = 6] = "kRetYes";
            TaskDialogResult[TaskDialogResult["kRetNo"] = 7] = "kRetNo";
            TaskDialogResult[TaskDialogResult["kRetClose"] = 8] = "kRetClose";
            TaskDialogResult[TaskDialogResult["kRetHelp"] = 9] = "kRetHelp";
            TaskDialogResult[TaskDialogResult["kRetTryAgain"] = 10] = "kRetTryAgain";
            TaskDialogResult[TaskDialogResult["kRetContinue"] = 11] = "kRetContinue";
            TaskDialogResult[TaskDialogResult["kRetTimeout"] = 32000] = "kRetTimeout";
        })(AutoCAD.TaskDialogResult || (AutoCAD.TaskDialogResult = {}));
        var TaskDialogResult = AutoCAD.TaskDialogResult;

        /**
        * This enum lists the button that can be set for Task Dialog
        *
        */
        (function (TaskDialogButton) {
            TaskDialogButton[TaskDialogButton["kButtonOk"] = 0x0001] = "kButtonOk";
            TaskDialogButton[TaskDialogButton["kButtonYes"] = 0x0002] = "kButtonYes";
            TaskDialogButton[TaskDialogButton["kButtonNo"] = 0x0004] = "kButtonNo";
            TaskDialogButton[TaskDialogButton["kButtonCancel"] = 0x0008] = "kButtonCancel";
            TaskDialogButton[TaskDialogButton["kButtonRetry"] = 0x0010] = "kButtonRetry";
            TaskDialogButton[TaskDialogButton["kButtonClose"] = 0x0020] = "kButtonClose";
        })(AutoCAD.TaskDialogButton || (AutoCAD.TaskDialogButton = {}));
        var TaskDialogButton = AutoCAD.TaskDialogButton;

        /**
        * This enum lists the flag associated with AutoCAD command.
        *
        */
        (function (CommandFlag) {
            CommandFlag[CommandFlag["MODAL"] = 0x00000000] = "MODAL";
            CommandFlag[CommandFlag["TRANSPARENT"] = 0x00000001] = "TRANSPARENT";
            CommandFlag[CommandFlag["USEPICKSET"] = 0x00000002] = "USEPICKSET";
            CommandFlag[CommandFlag["REDRAW"] = 0x00000004] = "REDRAW";
            CommandFlag[CommandFlag["NOPERSPECTIVE"] = 0x00000008] = "NOPERSPECTIVE";
            CommandFlag[CommandFlag["NOMULTIPLE"] = 0x00000010] = "NOMULTIPLE";
            CommandFlag[CommandFlag["NOTILEMODE"] = 0x00000020] = "NOTILEMODE";
            CommandFlag[CommandFlag["NOPAPERSPACE"] = 0x00000040] = "NOPAPERSPACE";
            CommandFlag[CommandFlag["NOOEM"] = 0x00000100] = "NOOEM";
            CommandFlag[CommandFlag["UNDEFINED"] = 0x00000200] = "UNDEFINED";
            CommandFlag[CommandFlag["INPROGRESS"] = 0x00000400] = "INPROGRESS";
            CommandFlag[CommandFlag["DEFUN"] = 0x00000800] = "DEFUN";
            CommandFlag[CommandFlag["LISPASCMD"] = 0x00001000] = "LISPASCMD";
            CommandFlag[CommandFlag["NONEWSTACK"] = 0x00010000] = "NONEWSTACK";
            CommandFlag[CommandFlag["NOINTERNALLOCK"] = 0x00020000] = "NOINTERNALLOCK";
            CommandFlag[CommandFlag["DOCREADLOCK"] = 0x00080000] = "DOCREADLOCK";
            CommandFlag[CommandFlag["DOCEXCLUSIVELOCK"] = 0x00100000] = "DOCEXCLUSIVELOCK";
            CommandFlag[CommandFlag["SESSION"] = 0x00200000] = "SESSION";
            CommandFlag[CommandFlag["INTERRUPTIBLE"] = 0x00400000] = "INTERRUPTIBLE";
            CommandFlag[CommandFlag["NOHISTORY"] = 0x00800000] = "NOHISTORY";
            CommandFlag[CommandFlag["NO_UNDO_MARKER"] = 0x01000000] = "NO_UNDO_MARKER";
            CommandFlag[CommandFlag["NOBEDIT"] = 0x02000000] = "NOBEDIT";
            CommandFlag[CommandFlag["NOACTIONRECORDING"] = 0x04000000] = "NOACTIONRECORDING";
            CommandFlag[CommandFlag["ACTIONMACRO"] = 0x08000000] = "ACTIONMACRO";
            CommandFlag[CommandFlag["RELAXASSOC"] = 0x10000000] = "RELAXASSOC";
            CommandFlag[CommandFlag["CORE"] = 0x20000000] = "CORE";
            CommandFlag[CommandFlag["NOINFERCONSTRAINT"] = 0x40000000] = "NOINFERCONSTRAINT";
            CommandFlag[CommandFlag["TEMPSHOWDYNDIM"] = 0x80000000] = "TEMPSHOWDYNDIM";
        })(AutoCAD.CommandFlag || (AutoCAD.CommandFlag = {}));
        var CommandFlag = AutoCAD.CommandFlag;
        ;

        /**
        * For Internal use
        *
        */
        AutoCAD.Int32MinValue = -(0x8000);
        AutoCAD.Int32MaxValue = 0x7FFF;

        //TODO: remove in future when Typescript is used for inheritance
        /**
        * For Internal use
        *
        */
        AutoCAD.extend = function (subClass, baseClass) {
            function inheritance() {
            }
            inheritance.prototype = baseClass.prototype;
            subClass.prototype = new inheritance();
        };

        /**
        * This JSAPI enum wraps the AcGiMapper::Projection ObjectARX enum.
        * This enumeration provides values that describe the mapping projection of the mapper.
        *
        */
        (function (Enum_Projection) {
            Enum_Projection[Enum_Projection["Parallel"] = 0] = "Parallel";
            Enum_Projection[Enum_Projection["Perspective"] = 1] = "Perspective";
        })(AutoCAD.Enum_Projection || (AutoCAD.Enum_Projection = {}));
        var Enum_Projection = AutoCAD.Enum_Projection;
        ;

        /**
        * This function tests whether the number passed is a valid float
        * @param n of type float
        * @returns boolean
        */
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n) && typeof (n) !== 'string';
        }
        AutoCAD.isNumber = isNumber;
        ;

        /**
        * This function tests whether the number passed is a Integer
        * @param value is a number
        * @returns boolean
        */
        function isInteger(value) {
            return !isNaN(parseInt(value)) && (parseFloat(value) == parseInt(value));
        }
        AutoCAD.isInteger = isInteger;

        /**
        * This is ErrorStatus defined for Shaping Layer.
        * IMPORTANT: the following enum values have to match the JsErrorStatus defined in %crxapps%\AcJsCoreStub\AcJsCoreStubDefs.h
        */
        (function (ErrorStatus) {
            ErrorStatus[ErrorStatus["eJsOk"] = 0] = "eJsOk";
            ErrorStatus[ErrorStatus["eJsInvalidArguments"] = 1] = "eJsInvalidArguments";
            ErrorStatus[ErrorStatus["eJsFail"] = 2] = "eJsFail";
            ErrorStatus[ErrorStatus["eJsUnknownError"] = 256] = "eJsUnknownError";
            ErrorStatus[ErrorStatus["eJsInvalidInputJsonArgs"] = 257] = "eJsInvalidInputJsonArgs";
            ErrorStatus[ErrorStatus["eJsUnSupportedSysVarValueType"] = 258] = "eJsUnSupportedSysVarValueType";
            ErrorStatus[ErrorStatus["eJsUnknownCallback"] = 259] = "eJsUnknownCallback";
            ErrorStatus[ErrorStatus["eJsInvalidTooltipId"] = 260] = "eJsInvalidTooltipId";
            ErrorStatus[ErrorStatus["eJsUnknownFunctionName"] = 261] = "eJsUnknownFunctionName";
            ErrorStatus[ErrorStatus["eJsUnknownCompleteCallback"] = 262] = "eJsUnknownCompleteCallback";
            ErrorStatus[ErrorStatus["eJsUnknownErrorCallback"] = 263] = "eJsUnknownErrorCallback";
            ErrorStatus[ErrorStatus["eJsNoDocument"] = 264] = "eJsNoDocument";
            ErrorStatus[ErrorStatus["eJsSyncFunction"] = 265] = "eJsSyncFunction";
            ErrorStatus[ErrorStatus["eJsAsyncFunction"] = 266] = "eJsAsyncFunction";
            ErrorStatus[ErrorStatus["eJsFailGetCurGsView"] = 267] = "eJsFailGetCurGsView";
            ErrorStatus[ErrorStatus["eJsFailGetSysVar"] = 268] = "eJsFailGetSysVar";
            ErrorStatus[ErrorStatus["eJsFailGetDrawable"] = 269] = "eJsFailGetDrawable";
            ErrorStatus[ErrorStatus["eJsInvalidTransientId"] = 270] = "eJsInvalidTransientId";
            ErrorStatus[ErrorStatus["eJsFailCreateJig"] = 271] = "eJsFailCreateJig";
            ErrorStatus[ErrorStatus["eJsJigPromptSet"] = 272] = "eJsJigPromptSet";
            ErrorStatus[ErrorStatus["eJsNotSupportedInPaperSpace"] = 273] = "eJsNotSupportedInPaperSpace";
            ErrorStatus[ErrorStatus["eJsCommandLineBusy"] = 274] = "eJsCommandLineBusy";
            ErrorStatus[ErrorStatus["eJsNotAvailableInLockedViewport"] = 275] = "eJsNotAvailableInLockedViewport";
            ErrorStatus[ErrorStatus["eJsCancel"] = 276] = "eJsCancel";
        })(AutoCAD.ErrorStatus || (AutoCAD.ErrorStatus = {}));
        var ErrorStatus = AutoCAD.ErrorStatus;
        ;

        /*
        * Creates a container object which holds Viewport related properties
        * @param position of type Acad.Position3d
        * @param target of type Acad.Position3d
        * @param upVector of type Acad.Vector3d
        * @param fieldWidth of type double
        * @param fieldHeight of type double
        * @param projection of type Acad.Enum_Projection
        * @return a container object of type Acad.ViewProperties
        *
        */
        var ViewProperties = (function () {
            function ViewProperties(position, target, upVector, fieldWidth, fieldHeight, projection) {
                if (!isNumber(fieldWidth)) {
                    throw TypeError('fieldWidth should be a double value');
                }
                if (!isNumber(fieldHeight)) {
                    throw TypeError('fieldHeight should be a double value');
                }
                if (!(position instanceof Acad.Point3d)) {
                    throw TypeError('position should be of type Acad.Point3d');
                }
                if (!(target instanceof Acad.Point3d)) {
                    throw TypeError('target should be of type Acad.Point3d');
                }
                if (!(upVector instanceof Acad.Vector3d)) {
                    throw TypeError('upVector should be of type Acad.Vector3d');
                }
                if (!(projection === Acad.Enum_Projection.Parallel || projection === Acad.Enum_Projection.Perspective)) {
                    throw TypeError('projection should be  Acad.Enum_Projection.Parallel or Acad.Enum_Projection.Perspective ');
                }
                this.position = position;
                this.target = target;
                this.upVector = upVector;
                this.fieldWidth = fieldWidth;
                this.fieldHeight = fieldHeight;
                this.projection = projection;
            }
            return ViewProperties;
        })();
        AutoCAD.ViewProperties = ViewProperties;
        ;

        /*
        * This is also used as a base class, designed to achieve Promise Pattern
        *
        */
        var Promise = (function () {
            function Promise() {
            }
            /*
            * This is the function used to register callback
            * @param success Function pointer call at the time of success/cancel.
            * @param error Function pointer call at the time of error.
            * @throws TypeError
            *
            */
            Promise.prototype.then = function (success, error) {
                if (typeof (success) == 'function')
                    this.success = success;
else
                    throw TypeError('success function pointer should be of type function');

                if (typeof (error) == 'function')
                    this.error = error;
else
                    throw TypeError('error function pointer should be of type function');
            };
            return Promise;
        })();
        AutoCAD.Promise = Promise;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));

var Acad = Autodesk.AutoCAD;
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    /**
    * This class wraps AcGePoint2d ObjectARX class. It represents a point in 2-dimensional space. It can be viewed as a structure consisting of two doubles.
    * @param coordinates x, y.
    * @throws TypeError
    *
    */
    (function (AutoCAD) {
        var Point2d = (function () {
            function Point2d(x, y) {
                if (typeof x == 'number')
                    this.x = x;
else
                    throw TypeError("x is not number");

                if (typeof y == 'number')
                    this.y = y;
else
                    throw TypeError("y is not number");
            }
            return Point2d;
        })();
        AutoCAD.Point2d = Point2d;

        /**
        * This class wraps AcGePoint3d ObjectARX class. It represents a point in 3D space. It can be viewed as a structure consisting of three doubles.
        * @param coordinates x, y, and z.
        * @throws TypeError
        *
        */
        var Point3d = (function () {
            function Point3d(x, y, z) {
                if (typeof x == 'number')
                    this.x = x;
else
                    throw TypeError("x is not number");

                if (typeof y == 'number')
                    this.y = y;
else
                    throw TypeError("y is not number");

                if (typeof z == 'number')
                    this.z = z;
else
                    throw TypeError("z is not number");
            }
            return Point3d;
        })();
        AutoCAD.Point3d = Point3d;

        /**
        * This class wraps the AcGeVector2d ObjectARX class.
        * Vector2d represents a vector in 2D space. It can be viewed as a structure consisting of two doubles.
        * @param coordinates x, y.
        * @throws TypeError
        *
        */
        var Vector2d = (function () {
            function Vector2d(x, y) {
                if (typeof x == 'number')
                    this.x = x;
else
                    throw TypeError("x is not number");

                if (typeof y == 'number')
                    this.y = y;
else
                    throw TypeError("y is not number");
            }
            return Vector2d;
        })();
        AutoCAD.Vector2d = Vector2d;

        /**
        * This class wraps the AcGeVector3d ObjectARX class.
        * Vector3d represents a vector in 3D space. It can be viewed as a structure consisting of 3 doubles.
        * @param coordinates x, y, and z correspondingly.
        * @throws TypeError
        *
        */
        var Vector3d = (function () {
            function Vector3d(x, y, z) {
                if (typeof x == 'number')
                    this.x = x;
else
                    throw TypeError("x is not number");

                if (typeof y == 'number')
                    this.y = y;
else
                    throw TypeError("y is not number");

                if (typeof z == 'number')
                    this.z = z;
else
                    throw TypeError("z is not number");
            }
            return Vector3d;
        })();
        AutoCAD.Vector3d = Vector3d;

        /**
        * This class wraps the lowerLeft and upperRight Point2d objects.
        * @param lowerLeft point of type Acad.Point2d
        * @param upperRight point of type Acad.Point2d
        * @throws TypeError
        *
        */
        var Rectangle2d = (function () {
            function Rectangle2d(lowerLeft, upperRight) {
                if (lowerLeft instanceof Acad.Point2d)
                    this.lowerLeft = lowerLeft;
else
                    throw TypeError("lowerLeft should be of Acad.Point2d type.");

                if (upperRight instanceof Acad.Point2d)
                    this.upperRight = upperRight;
else
                    throw TypeError("upperRight should be of Acad.Point2d type.");
            }
            return Rectangle2d;
        })();
        AutoCAD.Rectangle2d = Rectangle2d;

        /**
        * @class Acad.Bounds3d,
        * The object represents the 3d geometric extents of an entity
        * Its similar to AcDbExtents, with minimum and maximum points
        * @param minPt3d is the minimum point of the extents
        * @param maxPt3d is the maximum point of the extents
        * @throws TypeError
        *
        */
        var Bounds3d = (function () {
            function Bounds3d(minPt3d, maxPt3d) {
                if (minPt3d instanceof Acad.Point3d)
                    this.minPoint3d = minPt3d;
else
                    throw TypeError("minPt3d should be of Acad.Point3d type.");

                if (maxPt3d instanceof Acad.Point3d)
                    this.maxPoint3d = maxPt3d;
else
                    throw TypeError("maxPt3d should be of Acad.Point3d type.");
            }
            return Bounds3d;
        })();
        AutoCAD.Bounds3d = Bounds3d;

        //TODO: check compatibility with previous js
        /**
        * This class wraps the AcGeMatrix3d ObjectARX class.
        * Class Matrix3d represents an affine transformation of 3D space, including translation.
        *
        */
        var Matrix3d = (function () {
            function Matrix3d() {
                var matrix = new Array(4);
                for (var i = 0; i < matrix.length; i++)
                    matrix[i] = new Array(4);
                return matrix;
            }
            return Matrix3d;
        })();
        AutoCAD.Matrix3d = Matrix3d;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="Application.ts"/>
    (function (AutoCAD) {
        /**
        * @class Acad.TransientManager
        * This is the controller object that is used to create and manage the
        * transients.
        */
        var TransientManager = (function () {
            function TransientManager() {
                this.transients = [];
                this.transientid = 1;
                this.IsRegisteredForEvents = false;
            }
            /**
            * This function is for internal use.
            *
            */
            TransientManager.prototype.transientManager_event = function (eventArgs) {
                if (!eventArgs) {
                    return;
                }

                var id = eventArgs.id;

                var index = this.getIndex(id);
                if (index == -1) {
                    return;
                }

                var transient = this.transients[index];
                eventArgs.transient = transient;
                transient.dispatchEvent(eventArgs.eventname, eventArgs);
            };

            /**
            * The addTransient function is used to add an Acad.Transient object to the AutoCAD transient manager.
            * The XML data represents an AcGiDrawable object defined by the transient.xsd schema.
            * @param transient is of type Acad.Transient.
            * @param xmlData is of type string.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            TransientManager.prototype.addTransient = function (transient, xmlData) {
                if (!this.IsRegisteredForEvents) {
                    var obj = this;
                    AutoCAD.TransientManagerInterop.addHandler_mouseChanged(function (eventArgs) {
                        obj.transientManager_event(eventArgs);
                    });
                    this.IsRegisteredForEvents = true;
                }

                if (this.getIndex(transient.getId()) != -1) {
                    return;
                }

                this.transients.push(transient);

                return AutoCAD.TransientManagerInterop.addTransient(transient.getId(), xmlData);
            };

            /**
            * The updateTransient function is used to update an Acad.Transient object in the AutoCAD transient manager.
            * The XML data represents an AcGiDrawable object defined by the transient.xsd schema.
            * @param transientId is of type int.
            * @param xmlData is of type string.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            TransientManager.prototype.updateTransient = function (transientId, xmlData) {
                return AutoCAD.TransientManagerInterop.updateTransient(transientId, xmlData);
            };

            /**
            * The eraseTransient function is used erase the the Acad.Transient object from the AutoCAD transient manager.
            * @param transientId is of type int.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            TransientManager.prototype.eraseTransient = function (transientId) {
                return AutoCAD.TransientManagerInterop.eraseTransient(transientId);
            };

            /**
            * The eraseTransients function is used erase Acad.Transient objects from the AutoCAD transient manager.
            * @param transientIds is of type Array int.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            TransientManager.prototype.eraseTransients = function (transientIds) {
                return AutoCAD.TransientManagerInterop.eraseTransients(transientIds);
            };

            /**
            * The showTransients function is used show or hide the Acad.Transient objects in
            * the AutoCAD transient manager.
            * @param transientIds is of type Array int.
            * @param bShow is of type bool.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            TransientManager.prototype.showTransients = function (transientIds, bShow) {
                return AutoCAD.TransientManagerInterop.showTransients(transientIds, bShow);
            };

            /**
            * The getCursor function is used to get the current cursor assigned to the Acad.Transient object.
            * It is returned in the cursor property of the object in the onComplete method.
            * This is the optional 'cursor' attribute in the transient XML schema.
            * @param transientId is of type int.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            TransientManager.prototype.getCursor = function (transientId) {
                return AutoCAD.TransientManagerInterop.getCursor(transientId);
            };

            /**
            * This function is a private API for internal use.
            *
            */
            TransientManager.prototype.generateImage = function (imgtype, imgId, imgPostedBy, imgMessage) {
                var jsonStr = exec(JSON.stringify({ functionName: 'Ac_Transientmanager_generateimage', invokeAsCommand: false, functionParams: { type: imgtype, id: imgId, postedby: imgPostedBy, message: imgMessage } }));
                return jsonStr;
            };

            /**
            * This function is for internal use.
            * generate id from stub layer
            *
            */
            TransientManager.prototype.getNewId = function () {
                return AutoCAD.TransientManagerInterop.getNewTransientId();
            };

            /**
            * This function is for internal use.
            *
            */
            TransientManager.prototype.getIndex = function (id) {
                for (var i = 0, len = this.transients.length; i < len; i++) {
                    if (this.transients[i].getId() === id) {
                        return i;
                    }
                }
                return -1;
            };

            /**
            * This function is for internal use.
            *
            */
            TransientManager.prototype.setEventHandlingBehavior = function (id, eventname, bFilter) {
                AutoCAD.TransientManagerInterop.setEventHandlingBehavior(id, eventname, bFilter);
            };
            TransientManager.prototype.complete = function () {
            };

            TransientManager.prototype.error = function () {
            };
            return TransientManager;
        })();
        AutoCAD.TransientManager = TransientManager;

        /**
        * @class Acad.TransientManager
        * This is the controller object that is used to create and manage the
        * transients.
        */
        var Transient = (function () {
            function Transient() {
                this.eventname = {
                    mousemove: "mousemove",
                    mouseleave: "mouseleave",
                    lbuttondown: "lbuttondown",
                    lbuttonup: "lbuttonup",
                    lbuttondblclk: "lbuttondblclk",
                    rbuttondown: "rbuttondown",
                    rbuttonup: "rbuttonup",
                    rbuttondblclk: "rbuttondblclk",
                    mbuttondown: "mbuttondown",
                    mbuttonup: "mbuttonup",
                    mbuttondblclk: "mbuttondblclk",
                    mousewheel: "mousewheel"
                };
                this.id = Acad.Application.activedocument.transientManager.getNewId();
                this.eventobject = new Acad.EventObject();
            }
            /**
            * This function is used to add a callback.
            * @param eventname is the event for which fn would be called.
            * @param fn is a callback function, which is called when an event occurs.
            *
            */
            Transient.prototype.addEventListener = function (eventname, fn) {
                this.eventobject.addEventListener(eventname, fn);
            };

            /**
            * This function is used to remove a callback.
            * @param eventname is the event for which fn would be called.
            * @param fn is a callback function, which would not be called further for the given eventname.
            *
            */
            Transient.prototype.removeEventListener = function (eventname, fn) {
                this.eventobject.removeEventListener(eventname, fn);
            };

            /**
            * The getId function is used get the assigned transient id.
            * @return int.
            *
            */
            Transient.prototype.getId = function () {
                return this.id;
            };

            /**
            * This function is for internal use.
            *
            */
            Transient.prototype.dispatchEvent = function (eventname, args) {
                this.eventobject.dispatchEvent(eventname, args);
            };

            Transient.prototype.setEventHandlingBehavior = function (eventname, bFilter) {
                Acad.Application.activedocument.transientManager.setEventHandlingBehavior(this.id, eventname, bFilter);
            };
            return Transient;
        })();
        AutoCAD.Transient = Transient;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="Transient.ts"/>
    (function (AutoCAD) {
        /**
        * @class Acad.OSet,
        * The object contains a collection of object identifiers.
        * Its similar to ads_name, and valid only while you are working on a drawing
        * with AutoCAD, and they are invalid when exiting from AutoCAD or switching to
        * another drawing.
        */
        var OSet = (function () {
            function OSet() {
                this.dbObjects = [];
            }
            OSet.prototype.getIndex = function (id) {
                for (var i = 0, len = this.dbObjects.length; i < len; i++) {
                    if (this.dbObjects[i] == id) {
                        return i;
                    }
                }

                return -1;
            };

            /**
            * The method will add the input object id to the collection.
            * @param Input object id.
            */
            OSet.prototype.add = function (id) {
                if (!id) {
                    return;
                }

                if (typeof id === "string" || typeof id === "number") {
                    this.dbObjects.push(id);
                } else if (id instanceof Array) {
                    this.dbObjects = this.dbObjects.concat(id);
                } else if (id instanceof OSet) {
                    for (var i = 0, len = id.getCount(); i < len; i++) {
                        this.dbObjects.push(id.getId(i));
                    }
                }
            };

            /**
            * The method will remove the input object id from the collection.
            * @param Input id.
            */
            OSet.prototype.remove = function (id) {
                var index = this.getIndex(id);
                if (index !== -1) {
                    this.dbObjects.splice(index, 1);
                }
            };

            /**
            * The method will remove all the ids from the collection.
            */
            OSet.prototype.clear = function () {
                this.dbObjects = [];
            };

            /**
            * The method will return the number of items in the collection.
            * @return Returns the number of items in the collection.
            */
            OSet.prototype.getCount = function () {
                return this.dbObjects.length;
            };

            /**
            * The method will return the id given the index of the item in the collection.
            * @param Input index, it should be more than or equal to 0 and less than the number of items in the collection.
            * @return Returns the id at the given index.
            */
            OSet.prototype.getId = function (index) {
                return this.dbObjects[index];
            };

            /**
            * The method will return the index of the input id, in the collection.
            * @param Input id.
            * @return Returns the index of the input id if it is present, otherwise returns -1.
            */
            OSet.prototype.indexOf = function (id) {
                return this.getIndex(id);
            };

            /**
            * The method can be used to test if the id is present in the collection.
            * @param Input id.
            * @return Returns true if the id is present in the collection, otherwise returns false.
            */
            OSet.prototype.contains = function (id) {
                return this.getIndex(id) != -1;
            };

            /**
            * The method will return all the ids in the collection.
            * @return Returns an array that contains all the ids in the collection.
            */
            OSet.prototype.getAllIds = function () {
                var ids = [];
                ids = ids.concat(this.dbObjects);
                return ids;
            };
            return OSet;
        })();
        AutoCAD.OSet = OSet;

        /**
        * @class Acad.DBEntity,
        * The object represents a database resident entity
        * Its similar to AcDbEntity, and valid only while you are working on a drawing
        * with AutoCAD, and is invalid when exiting from AutoCAD or switching to
        * another drawing.
        * @param id is the object identifier
        */
        var DBEntity = (function () {
            function DBEntity(id) {
                if (!id) {
                    throw TypeError(" id is mandatory for new DBEntity");
                }

                this.entityId = id;
            }
            Object.defineProperty(DBEntity.prototype, "id", {
                get: /**
                * Returns the object identifier. Read only property.
                * @return id which is of string type
                */
                function () {
                    return this.entityId;
                },
                set: function (val) {
                    throw Error(" You are not allowed to set this property");
                },
                enumerable: true,
                configurable: true
            });

            /**
            * Returns the object geometric extents defined by min and max points.
            * @return object of type Acad.Bounds3d
            */
            DBEntity.prototype.getExtents = function () {
                var obj = Acad.DBEntityInterop.getExtents(this.entityId);
                var minPoint = new Acad.Point3d(obj.minPoint3d.x, obj.minPoint3d.y, obj.minPoint3d.z);
                var maxPoint3d = new Acad.Point3d(obj.maxPoint3d.x, obj.maxPoint3d.y, obj.maxPoint3d.z);
                var result = new Acad.Bounds3d(minPoint, maxPoint3d);
                return result;
            };

            /**
            * Returns all the properties of this DBEntity.
            * @return the properties map(name-value pair).
            */
            DBEntity.prototype.getProperties = function () {
                var propArray = Acad.DBEntityInterop.getProperties(this.entityId);

                var resultObj = {};
                for (var i = 0; i < propArray.length; ++i) {
                    resultObj[propArray[i].key] = propArray[i].value;
                }

                return resultObj;
            };
            return DBEntity;
        })();
        AutoCAD.DBEntity = DBEntity;

        /**
        * @class Acad.TaskDialog,
        * The object represents a task dialog
        */
        (function (TaskDialog) {
            /**
            * Show a custom task dialog.
            * @param strWindowTitle is the string for dialog title.
            * @param strMainInstruction is the string for main instruction in the dialog.
            * @param strContentText is the string for content text in the dialog.
            * @param nCommonButtons is the integer flag which specifies buttons displayed in the dialog.
            * It can be bitwise OR values of enum Acad.TaskDialogButton, such as Acad.TaskDialogButton.kButtonOk | Acad.TaskDialogButton.kButtonCancel.
            * @returns the promise object, the then argument can be used. Success callback will return result in enum Acad.TaskDialogResult.
            */
            function showTaskDialog(strWindowTitle, strMainInstruction, strContentText, nCommonButtons) {
                if (typeof (strWindowTitle) !== 'string') {
                    throw TypeError('strWindowTitle should be of type string');
                }

                if (typeof (strMainInstruction) !== 'string') {
                    throw TypeError('strMainInstruction should be of type string');
                }

                if (typeof (strContentText) !== 'string') {
                    throw TypeError('strContentText should be of type string');
                }

                if (!(Acad.isInteger(nCommonButtons))) {
                    throw TypeError('nCommonButtons should be of type integer');
                }

                return AutoCAD.ApplicationInterop.showTaskDialog(strWindowTitle, strMainInstruction, strContentText, nCommonButtons);
            }
            TaskDialog.showTaskDialog = showTaskDialog;
            ;

            /**
            * Show a task dialog with confirmation message to delete.
            * @param strTitle is the string for dialog title: "<strTitle> - Delete <strTitle>".
            * @param strMessage is the string for message in the dialog: "Are you sure you want to delete <strMessage> ?"
            * @returns the promise object, the then argument can be used. Success callback will return result in enum Acad.TaskDialogResult.
            */
            function showDeleteConfirmationTaskDialog(strTitle, strMessage) {
                if (typeof (strTitle) !== 'string') {
                    throw TypeError('strTitle should be of type string');
                }

                if (typeof (strMessage) !== 'string') {
                    throw TypeError('strMessage should be of type string');
                }

                return AutoCAD.ApplicationInterop.showDeleteConfirmationTaskDialog(strTitle, strMessage);
            }
            TaskDialog.showDeleteConfirmationTaskDialog = showDeleteConfirmationTaskDialog;
            ;
        })(AutoCAD.TaskDialog || (AutoCAD.TaskDialog = {}));
        var TaskDialog = AutoCAD.TaskDialog;
        ;

        /**
        * For Internal Use
        *
        */
        var EventObject = (function () {
            function EventObject() {
                this.listeners = {};
            }
            EventObject.prototype.addEventListener = function (eventname, listener) {
                if (typeof this.listeners[eventname] == "undefined") {
                    this.listeners[eventname] = [];
                }

                var isAdded = false;
                if (this.listeners[eventname] instanceof Array) {
                    var listeners = this.listeners[eventname];
                    for (var i = 0, len = listeners.length; i < len; ++i) {
                        if (listeners[i] === listener) {
                            isAdded = true;
                            break;
                        }
                    }
                }

                if (!isAdded) {
                    this.listeners[eventname].push(listener);
                }
            };

            EventObject.prototype.removeEventListener = function (eventname, listener) {
                if (this.listeners[eventname] instanceof Array) {
                    var listeners = this.listeners[eventname];
                    for (var i = 0, len = listeners.length; i < len; ++i) {
                        if (listeners[i] === listener) {
                            break;
                        }
                    }

                    listeners.splice(i, 1);
                }
            };

            EventObject.prototype.dispatchEvent = function (eventname, args) {
                if (this.listeners[eventname] instanceof Array) {
                    var listeners = this.listeners[eventname];
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        listeners[i](eventname, args);
                    }
                }
            };

            EventObject.prototype.count = function (eventname) {
                if (this.listeners[eventname] instanceof Array) {
                    var listeners = this.listeners[eventname];
                    return listeners.length;
                }

                return 0;
            };
            return EventObject;
        })();
        AutoCAD.EventObject = EventObject;

        var MenuItem = (function () {
            function MenuItem(text, id, isChecked, isEnabled, items) {
                this.text = text;
                this.id = id || 0;
                this.isChecked = isChecked || false;
                this.isEnabled = isEnabled || true;
                this.items = items || null;

                if (typeof this.id != 'number')
                    throw TypeError("id is not number");

                if (typeof this.text != 'string')
                    throw TypeError("text is not string");

                if (typeof this.isChecked != 'boolean')
                    throw TypeError("isChecked is not boolean");

                if (typeof this.isEnabled != 'boolean')
                    throw TypeError("isEnabled is not boolean");

                if (this.items && !(this.items instanceof Array))
                    throw new TypeError("items should be of Array type.");
            }
            return MenuItem;
        })();
        AutoCAD.MenuItem = MenuItem;

        var Menu = (function () {
            function Menu(items) {
                if (items instanceof Array)
                    this.items = items;
else
                    throw new TypeError("items should be of Array type.");
            }
            return Menu;
        })();
        AutoCAD.Menu = Menu;

        /**
        * @class Acad.Application, its a singleton. The class
        * provides services for accessing the active document object.
        */
        (function (Application) {
            /**
            * This method can be used inside a command to ensure that all pending events are dispatched to
            * your code before the command ends. You may want to do this if you called executeCommand and you
            * want to make sure that your event handlers are called.
            */
            function doEvents() {
                return Acad.ApplicationInterop.doEvents();
            }
            Application.doEvents = doEvents;

            /**
            * The function can be used to show a HTML dialog with the specified URL.
            * @returns the promise object, the then argument can be used.
            */
            function showHTMLDialog(location, opts) {
                return Acad.ApplicationInterop.showHTMLDialog(location, opts);
            }
            Application.showHTMLDialog = showHTMLDialog;

            /**
            * The method can be used to launch a modal dialog with
            * the specified url
            * @param value is the url to be rendered.
            *
            */
            function showModalDialog(value) {
                Acad.ApplicationInterop.showModalDialog(value);
            }
            Application.showModalDialog = showModalDialog;

            /**
            * The method is used to open a HTML document window in
            * AutoCAD.
            * @param t is the title of the window.
            * @param u is the URL address to the HTML document.
            *
            */
            function addDocWindow(t, u) {
                Acad.ApplicationInterop.addDocWindow(t, u);
            }
            Application.addDocWindow = addDocWindow;

            /**
            * The method can be used to set the commit state of the modal dialog.
            * It is analogous to the OK or Cancel return value of a dialog.
            * Calling this method dismisses the HTML dialog.
            * @param value is the bool value of the commit state
            *
            */
            function modalDialogCommit(value) {
                Acad.ApplicationInterop.modalDialogCommit(value);
            }
            Application.modalDialogCommit = modalDialogCommit;

            /**
            * The method can be used to launch a palette with
            * the specified url
            * @param strPaletteName is the palette name .
            * @param uriOfHtmlPage is the url to be rendered.
            *
            */
            function addPalette(strPaletteName, uriOfHtmlPage) {
                if (typeof (strPaletteName) !== 'string') {
                    throw TypeError('strPaletteName should be of type string');
                }

                if (typeof (uriOfHtmlPage) !== 'string') {
                    throw TypeError('uriOfHtmlPage should be of type string');
                }

                Acad.ApplicationInterop.addPalette(strPaletteName, uriOfHtmlPage);
            }
            Application.addPalette = addPalette;

            function displayContextMenu(x, y, menu) {
                if (menu.items.length <= 0) {
                    throw TypeError('Menu items are empty');
                }

                return AutoCAD.ApplicationInterop.displayContextMenu(x, y, menu);
            }
            Application.displayContextMenu = displayContextMenu;
            ;

            /**
            * This function is for internal use.
            *
            */
            function oncomplete() {
            }

            /**
            * This function is for internal use.
            *
            */
            function onerror() {
            }
            (function (activedocument) {
                var dbobjects = {};
                activedocument.eventname = { "modified": "modified", "erased": "erased" };
                var bIsRegisteredForNotification = false;

                //registerCallback('Ac_activedocument_databaseobject_event', activedocument_databaseobject_event);
                /**
                * This returns a transient manager object.
                */
                activedocument.transientManager = new Acad.TransientManager();

                /**
                * This function is for internal use.
                *
                */
                function objectModifiedCallback(eventArgs) {
                    var id = eventArgs.id;
                    var eventname = Acad.Application.activedocument.eventname.modified;
                    var eventobj = dbobjects[id];
                    if (eventobj) {
                        eventobj.dispatchEvent(eventname, eventArgs);
                    }
                }

                /**
                * This function is for internal use.
                *
                */
                function objectErasedCallback(eventArgs) {
                    var id = eventArgs.id;
                    var eventname = Acad.Application.activedocument.eventname.erased;
                    var eventobj = dbobjects[id];
                    if (eventobj) {
                        eventobj.dispatchEvent(eventname, eventArgs);
                    }
                }

                /**
                * This function is for internal use.
                *
                */
                function oncomplete() {
                }

                /**
                * This function is for internal use.
                *
                */
                function onerror() {
                }

                /**
                * The method can be used to subscribe to object event notifications
                * for an object.
                * @param oset is the object to be observed.
                * @param Input event for receiving notification. It can be one of the values in Acad.Application.activedocument.eventname.
                * @param Input event handler, the event handler will called when the respective event occurs.
                * @throws Error
                */
                function startObserving(oset, eventname, fn) {
                    if (!fn) {
                        throw Error("startObserving(): Invalid listener");
                    }

                    if (!eventname || ((eventname != this.eventname.modified && eventname != this.eventname.erased))) {
                        throw Error("startObserving(): Invalid eventname");
                    }

                    if (!oset) {
                        throw Error("startObserving(): Invalid oset");
                    }

                    if (!(oset instanceof Acad.OSet)) {
                        throw new TypeError("startObserving(): oset should be of type Acad.OSet");
                    }

                    var osetCount = oset.getCount();
                    if (osetCount <= 0) {
                        throw Error("startObserving(): Empty oset");
                    }

                    if (!bIsRegisteredForNotification) {
                        Acad.ActiveDocumentInterop.addHandler_objectModified(objectModifiedCallback);
                        Acad.ActiveDocumentInterop.addHandler_objectErased(objectErasedCallback);
                        bIsRegisteredForNotification = true;
                    }

                    var objId;
                    for (var i = 0, len = oset.getCount(); i < len; i++) {
                        objId = oset.getId(i);
                        var eventobject = dbobjects[objId];
                        if (!eventobject) {
                            eventobject = new Acad.EventObject();

                            // Augument the object with a new property
                            eventobject.objId = objId;
                            dbobjects[objId] = eventobject;
                        }
                        eventobject.addEventListener(eventname, fn);
                    }

                    Acad.ActiveDocumentInterop.addObjectReactor(oset.getAllIds());
                }
                activedocument.startObserving = startObserving;

                /**
                * The method can be used to unsubscribe from receiving object event
                * notifications for the respective object.
                * @param oset is the object from which to stop receiving notifications.
                * @param Input event to stop receiving notifications.
                * @param Input event handler that was passed to startObserving method.
                * @throws Error
                */
                function stopObserving(oset, eventname, fn) {
                    if (!fn) {
                        throw Error("stopObserving(): Invalid listener");
                    }

                    if (!eventname || ((eventname != this.eventname.modified && eventname != this.eventname.erased))) {
                        throw Error("stopObserving(): Invalid eventname");
                    }

                    if (!oset) {
                        throw Error("stopObserving(): Invalid oset");
                    }

                    if (!(oset instanceof Acad.OSet)) {
                        throw new TypeError("stopObserving(): oset should be of type Acad.OSet");
                    }

                    var osetCount = oset.getCount();
                    if (osetCount <= 0) {
                        throw Error("stopObserving(): Empty oset");
                    }

                    var ids = [];
                    for (var i = 0; i < osetCount; i++) {
                        var objId = oset.getId(i);
                        var eventobject = dbobjects[objId];
                        if (eventobject) {
                            eventobject.removeEventListener(eventname, fn);
                            if (eventobject.count(this.eventname.modified) <= 0 && eventobject.count(this.eventname.erased) <= 0) {
                                ids.push(objId);
                                dbobjects[objId] = undefined;
                            }
                        }
                    }

                    if (ids.length <= 0) {
                        return;
                    }

                    Acad.ActiveDocumentInterop.removeObjectReactor(oset.getAllIds());
                }
                activedocument.stopObserving = stopObserving;

                /**
                * This function can be used to get the array of handles from the OSet.
                * @param Input oset that contains the object ids.
                * @returns the promise object, the then argument can be used.
                */
                function getHandle(oset) {
                    if (!oset) {
                        throw Error("getHandle(): Invalid oset");
                    }

                    if (!(oset instanceof AutoCAD.OSet)) {
                        throw new TypeError("getHandle(): oset should be of type Acad.OSet");
                    }

                    var osetCount = oset.getCount();
                    if (osetCount <= 0) {
                        throw Error("getHandle(): Empty oset");
                    }

                    return Acad.ActiveDocumentInterop.getHandles(oset.getAllIds());
                }
                activedocument.getHandle = getHandle;

                /**
                * This function can be used to get the array of object ids from the handles.
                * @param Input array containing the handles.
                * @returns the promise object, the then argument can be used.
                */
                function getObjectSet(handles) {
                    if (!handles) {
                        throw Error("getObjectSet(): Invalid handles");
                    }

                    if (!(handles instanceof Array)) {
                        throw Error("getObjectSet(): Invalid handles");
                    }

                    if (handles.length <= 0) {
                        throw Error("getObjectSet(): empty handles");
                    }

                    var result = new Acad.Promise();
                    return Acad.ActiveDocumentInterop.getObjectSet(handles);
                }
                activedocument.getObjectSet = getObjectSet;

                /**
                * The method can be used to capture an image of the current document.
                * The image is returned as a base64 encoded bitmap.
                * @param values are the width and height of the final image.
                * @returns the promise object, the then argument can be used.
                *
                */
                function capturePreview(w, h) {
                    var result = new Acad.Promise();

                    return Acad.ActiveDocumentInterop.capturePreview(w, h);
                }
                activedocument.capturePreview = capturePreview;

                /**
                * This function can be used to highlight the list of entities represented by the given OSet.
                * @param Input oset that contains the object ids.
                */
                function highlight(oset) {
                    if (!oset) {
                        throw Error("highlight(): Invalid oset");
                    }

                    if (!(oset instanceof Acad.OSet)) {
                        throw new TypeError("highlight(): oset should be of type Acad.OSet");
                    }

                    var osetCount = oset.getCount();
                    if (osetCount <= 0) {
                        throw Error("highlight(): Empty oset");
                    }
                    Acad.ActiveDocumentInterop.highlight(oset.getAllIds());
                }
                activedocument.highlight = highlight;

                /**
                * This function can be used to unhighlight the list of entities represented by the given OSet.
                * @param Input oset that contains the object ids.
                */
                function unhighlight(oset) {
                    if (!oset) {
                        throw Error("unhighlight(): Invalid oset");
                    }
                    if (!(oset instanceof Acad.OSet)) {
                        throw new TypeError("unhighlight(): oset should be of type Acad.OSet");
                    }

                    var osetCount = oset.getCount();
                    if (osetCount <= 0) {
                        throw Error("unhighlight(): Empty oset");
                    }

                    Acad.ActiveDocumentInterop.unhighlight(oset.getAllIds());
                }
                activedocument.unhighlight = unhighlight;
            })(Application.activedocument || (Application.activedocument = {}));
            var activedocument = Application.activedocument;
        })(AutoCAD.Application || (AutoCAD.Application = {}));
        var Application = AutoCAD.Application;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    (function (AutoCAD) {
        /**
        * This is the base class for types that represent optional parameters for prompts.
        * @param messageAndKeywords is the prompt message along with Keywords
        *
        */
        var PromptOptions = (function () {
            function PromptOptions(messageAndKeywords) {
                this.messageAndKeywords = messageAndKeywords;
                this.globalKeywords = "";
                this.appendKeywordsToMessage = true;
            }
            /**
            * This method sets the prompt message to the first part of the messageAndKeywords string and sets the display keywords to the latter part of the same string.
            * The display keywords portion of messageAndKeywords must be surrounded by an opening square bracket ("[") at the beginning and a closing square bracket
            * ("]") at the end. The keywords in this list must be delimited by a forward slash character ("/").
            * Each display keyword specified in messageAndKeywords must also be matched by a keyword in the same position in the globalKeywords string.
            * Keywords in globalKeywords must be delimited by a single space.
            * @param messageAndKeywords is the prompt message along with Keywords
            * @param globalKeywords
            * @throws Error
            *
            */
            PromptOptions.prototype.setMessageAndKeywords = function (messageAndKeywords, globalKeywords) {
                if (!messageAndKeywords) {
                    throw new Error('messageAndKeywords must be non-empty string');
                }

                if (globalKeywords) {
                    var startKeywords = messageAndKeywords.lastIndexOf("[");
                    var endKeywords = messageAndKeywords.lastIndexOf("]");
                    if (startKeywords >= 0 && endKeywords > startKeywords + 1) {
                        var displayKeywordsText = messageAndKeywords.substr(startKeywords + 1, (endKeywords - startKeywords - 1)).trim();
                        if (displayKeywordsText) {
                            if (displayKeywordsText.split('/').length != globalKeywords.split(' ').length) {
                                throw new Error('Number of global and local keywords is not equal.');
                            }
                        } else {
                            throw new Error('Keyword list is empty.');
                        }
                    } else {
                        throw new Error('Keyword list is empty.');
                    }
                } else {
                    var start = messageAndKeywords.lastIndexOf('[');
                    var end = messageAndKeywords.lastIndexOf(']');

                    if (start >= 0 && end > start + 1) {
                        throw new Error('Global keywords are missing');
                    }
                }

                this.messageAndKeywords = messageAndKeywords;
                this.globalKeywords = globalKeywords;
            };
            return PromptOptions;
        })();
        AutoCAD.PromptOptions = PromptOptions;

        /**
        * This is the base class for command prompt options used in various types of data acquisition.
        * @param messageAndKeywords is the prompt message along with Keywords.
        *
        */
        var PromptEditorOptions = (function (_super) {
            __extends(PromptEditorOptions, _super);
            function PromptEditorOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);

                this._allowNone = true;
                this._allowArbitraryInput = false;
                this._allowNegative = true;
                this._allowZero = true;
                this._useDashedLine = false;
                this._limitsChecked = true;
                this._only2d = false;
            }
            Object.defineProperty(PromptEditorOptions.prototype, "allowNone", {
                get: function () {
                    return this._allowNone;
                },
                set: function (x) {
                    this._allowNone = x;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEditorOptions.prototype, "allowArbitraryInput", {
                get: function () {
                    return this._allowArbitraryInput;
                },
                set: function (x) {
                    this._allowArbitraryInput = x;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEditorOptions.prototype, "allowNegative", {
                get: function () {
                    return this._allowNegative;
                },
                set: function (x) {
                    this._allowNegative = x;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEditorOptions.prototype, "allowZero", {
                get: function () {
                    return this._allowZero;
                },
                set: function (x) {
                    this._allowZero = x;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEditorOptions.prototype, "useDashedLine", {
                get: function () {
                    return this._useDashedLine;
                },
                set: function (x) {
                    this._useDashedLine = x;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEditorOptions.prototype, "limitsChecked", {
                get: function () {
                    return this._limitsChecked;
                },
                set: function (x) {
                    this._limitsChecked = x;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEditorOptions.prototype, "only2d", {
                get: function () {
                    return this._only2d;
                },
                set: function (x) {
                    this._only2d = x;
                },
                enumerable: true,
                configurable: true
            });
            return PromptEditorOptions;
        })(PromptOptions);
        AutoCAD.PromptEditorOptions = PromptEditorOptions;

        /**
        * This is the base class for types that represent optional parameters for numerical prompts.
        * @param messageAndKeywords is the prompt message along with Keywords.
        *
        */
        var PromptNumericalOptions = (function (_super) {
            __extends(PromptNumericalOptions, _super);
            function PromptNumericalOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._useDefaultValue = false;
            }
            Object.defineProperty(PromptNumericalOptions.prototype, "useDefaultValue", {
                get: /**
                * Gets or sets whether the prompt should use the default value when the user presses ENTER without any other input.
                * The property allowing client code to set the default value is declared by derived classes.
                * @Type boolean
                *
                */
                function () {
                    return this._useDefaultValue;
                },
                set: function (x) {
                    this._useDefaultValue = x;
                },
                enumerable: true,
                configurable: true
            });
            return PromptNumericalOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptNumericalOptions = PromptNumericalOptions;

        /**
        * This class represents optional parameters for a prompt for an integer.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @param lowerLimit is lower limit of input.
        * @param upperLimit is upper limit of input.
        * @throws TypeError
        *
        */
        var PromptIntegerOptions = (function (_super) {
            __extends(PromptIntegerOptions, _super);
            function PromptIntegerOptions(messageAndKeywords, lowerLimit, upperLimit) {
                _super.call(this, messageAndKeywords);
                this._defaultValue = 0;
                this.lowerLimit = lowerLimit || Acad.Int32MinValue;
                this.upperLimit = upperLimit || Acad.Int32MaxValue;
            }
            Object.defineProperty(PromptIntegerOptions.prototype, "defaultValue", {
                get: /**
                * The default value to be used when the user presses ENTER without any other input.
                * @Type Integer
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (Acad.isInteger(x)) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be of Integer Type');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PromptIntegerOptions;
        })(PromptNumericalOptions);
        AutoCAD.PromptIntegerOptions = PromptIntegerOptions;

        /**
        * This class represents optional parameters for a prompt for a double.
        * @param messageAndKeywords is the prompt message along with Keywords
        * @throws TypeError
        *
        */
        var PromptDoubleOptions = (function (_super) {
            __extends(PromptDoubleOptions, _super);
            function PromptDoubleOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._defaultValue = 0.0;
            }
            Object.defineProperty(PromptDoubleOptions.prototype, "defaultValue", {
                get: /**
                * The default value to be used when the user presses ENTER without any other input.
                * @Type Number
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (Acad.isNumber(x)) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be Number.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PromptDoubleOptions;
        })(PromptNumericalOptions);
        AutoCAD.PromptDoubleOptions = PromptDoubleOptions;

        /**
        * This class represents optional parameters for prompt for distance.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        *
        */
        var PromptDistanceOptions = (function (_super) {
            __extends(PromptDistanceOptions, _super);
            function PromptDistanceOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);

                /**
                * Gets or sets whether the base point is to be used.
                * @Type boolean
                */
                this.useBasePoint = false;
                this.useDashedLine = false;
                this._defaultValue = 0.0;
                this._basePoint = new Acad.Point3d(0, 0, 0);
            }
            Object.defineProperty(PromptDistanceOptions.prototype, "basePoint", {
                get: /**
                * Gets or sets the base point to be used by the prompt.
                * @Type Point3d
                */
                function () {
                    return this._basePoint;
                },
                set: function (x) {
                    if (x instanceof Acad.Point3d) {
                        this._basePoint = x;
                    } else {
                        throw new TypeError('Point should be of Point3d type.');
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptDistanceOptions.prototype, "defaultValue", {
                get: /**
                * The default value to be used when the user presses ENTER without any other input.
                * @Type Number
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (Acad.isNumber(x)) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be Number.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PromptDistanceOptions;
        })(PromptNumericalOptions);
        AutoCAD.PromptDistanceOptions = PromptDistanceOptions;

        /**
        * This class represents optional parameters for a corner prompt.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @param basePoint is input base point
        * @throws TypeError
        *
        */
        var PromptCornerOptions = (function (_super) {
            __extends(PromptCornerOptions, _super);
            function PromptCornerOptions(messageAndKeywords, basePoint) {
                _super.call(this, messageAndKeywords);

                if (basePoint != undefined) {
                    if (basePoint instanceof Acad.Point3d) {
                        this._basePoint = basePoint;
                    } else {
                        throw new TypeError('Point should be of Point3d type.');
                    }
                } else {
                    throw new TypeError('Point should be of Point3d type.');
                    this._basePoint = undefined;
                }
            }
            return PromptCornerOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptCornerOptions = PromptCornerOptions;

        /**
        * This class represents optional parameters for a prompt for point.
        * @param messageAndKeywords is the prompt message along with Keywords.
        *
        */
        var PromptPointOptions = (function (_super) {
            __extends(PromptPointOptions, _super);
            function PromptPointOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords, new Acad.Point3d(0, 0, 0));

                this.useBasePoint = false;
            }
            return PromptPointOptions;
        })(PromptCornerOptions);
        AutoCAD.PromptPointOptions = PromptPointOptions;

        /**
        * This class represents optional parameters for a prompt for string.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        *
        */
        var PromptStringOptions = (function (_super) {
            __extends(PromptStringOptions, _super);
            function PromptStringOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);

                this._defaultValue = "";
                this.allowSpaces = false;
                this.useDefaultValue = false;
            }
            Object.defineProperty(PromptStringOptions.prototype, "defaultValue", {
                get: /**
                * The default value to be used when the user presses ENTER without any other input.
                * @Type String
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (typeof (x) == 'string') {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be String.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PromptStringOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptStringOptions = PromptStringOptions;

        /**
        * This class represents optional parameters for a prompt for an angle.
        * @param messageAndKeywords is the prompt message along with Keywords
        * @throws TypeError
        *
        */
        var PromptAngleOptions = (function (_super) {
            __extends(PromptAngleOptions, _super);
            function PromptAngleOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);

                this._basePoint = new Acad.Point3d(0, 0, 0);
                this._defaultValue = 0.0;
                this.useBasePoint = false;
                this.useAngleBase = false;
                this.useDefaultValue = false;
            }
            Object.defineProperty(PromptAngleOptions.prototype, "basePoint", {
                get: /**
                * Gets or sets the base point to be used by the prompt.
                * @Type Point3d
                */
                function () {
                    return this._basePoint;
                },
                set: function (point) {
                    if (point instanceof Acad.Point3d) {
                        this._basePoint = point;
                    } else {
                        throw new TypeError('Point should be of Point3d type.');
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptAngleOptions.prototype, "defaultValue", {
                get: /**
                * The default value to be used when the user presses ENTER without any other input.
                * @Type Number
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (Acad.isNumber(x)) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be Number.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PromptAngleOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptAngleOptions = PromptAngleOptions;

        /**
        * This class represents optional parameters for a prompt for a keyword.
        * @param messageAndKeywords is the prompt message along with Keywords
        *
        */
        var PromptKeywordOptions = (function (_super) {
            __extends(PromptKeywordOptions, _super);
            function PromptKeywordOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
            }
            return PromptKeywordOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptKeywordOptions = PromptKeywordOptions;

        /**
        * This class represents optional parameters for a prompt for an entity.
        * @param messageAndKeywords is the prompt message along with Keywords.
        *
        */
        var PromptEntityOptions = (function (_super) {
            __extends(PromptEntityOptions, _super);
            function PromptEntityOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._rejectMessage = "";
                this._allowedClasses = undefined;

                /**
                * Gets or sets whether the prompt allows selection of entities on locked layer.
                * @Type boolean
                *
                */
                this.allowObjectOnLockedLayer = false;
            }
            Object.defineProperty(PromptEntityOptions.prototype, "rejectMessage", {
                get: /**
                * Gets or sets message as the prompt that is posted if the type of a
                * picked entity is not allowed for this selection.
                * @Type String
                */
                function () {
                    return this._rejectMessage;
                },
                set: function (x) {
                    if (typeof (x) == 'string') {
                        this._rejectMessage = x;
                    } else {
                        throw Error('Please provide reject message of string type.');
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(PromptEntityOptions.prototype, "allowedClasses", {
                get: /**
                * Gets internal list of classes allowed for the selection.
                * @Type Array
                * @Read-Only
                */
                function () {
                    return this._allowedClasses;
                },
                set: function (x) {
                    throw Error('Please use addAllowedClass() function to modify it.');
                },
                enumerable: true,
                configurable: true
            });

            /**
            * This method adds type to the internal list of classes allowed for the selection. If exactMatch is true, then only objects of the exact class type are allowed.
            * Otherwise, objects of the specified type and of any derived types are allowed. If type is already in the class list, the value of exactMatch is applied to the existing class entry.
            * @param className name of allowed class
            * @param exactMatch boolean for exact type
            * @throws Error
            *
            */
            PromptEntityOptions.prototype.addAllowedClass = function (newclassName, exactMatch) {
                if (this._rejectMessage == undefined)
                    throw Error('Use SetRejectMessage first.');

                if (typeof (exactMatch) != 'boolean')
                    throw Error('Type of exactMatch should be boolean.');

                if (this._allowedClasses == undefined) {
                    this._allowedClasses = new Array();
                }

                for (var index in this._allowedClasses) {
                    var obj = this._allowedClasses[index];
                    if (obj.className == newclassName) {
                        obj.exactMatch = exactMatch;
                        return;
                    }
                }

                // Add the allowed classes
                var allowed = { "className": newclassName, "exactMatch": exactMatch };
                this._allowedClasses.push(allowed);
            };

            /**
            * This method removes the class indicated by type from the internal list of classes allowed for this selection.
            * @param className name of class
            *
            */
            PromptEntityOptions.prototype.removeAllowedClass = function (className) {
                if (className) {
                    for (var index in this._allowedClasses) {
                        var obj = this._allowedClasses[index];
                        if (obj.hasOwnProperty('className') && obj['className'] == className) {
                            this._allowedClasses.splice(index, 1);
                            return;
                        }
                    }
                }
            };
            return PromptEntityOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptEntityOptions = PromptEntityOptions;

        /**
        * This class represents optional parameters for a prompt for a nested entity.
        * @param messageAndKeywords is the prompt message along with Keywords
        * @param nonInteractivePickPoint is the Point3d
        * @param useNonInteractivePickPoint is boolean
        * @throws TypeError
        *
        */
        var PromptNestedEntityOptions = (function (_super) {
            __extends(PromptNestedEntityOptions, _super);
            function PromptNestedEntityOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);

                /**
                * Gets or sets whether the prompt should attempt a non-interactive pick.
                * @Type boolean
                */
                this.useNonInteractivePickPoint = false;
                this._nonInteractivePickPoint = new Acad.Point3d(0, 0, 0);
            }
            Object.defineProperty(PromptNestedEntityOptions.prototype, "nonInteractivePickPoint", {
                get: /**
                * Gets or sets the value for a non-interactive pick point.
                * @Type Point3d
                */
                function () {
                    return this._nonInteractivePickPoint;
                },
                set: function (point) {
                    if (point instanceof Acad.Point3d) {
                        this._nonInteractivePickPoint = point;
                    } else {
                        throw new TypeError('nonInteractivePickPoint should be of Point3d type.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PromptNestedEntityOptions;
        })(PromptEditorOptions);
        AutoCAD.PromptNestedEntityOptions = PromptNestedEntityOptions;

        /**
        * This is the base class for jig prompt options.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throw TypeError
        *
        */
        var JigPromptOptions = (function (_super) {
            __extends(JigPromptOptions, _super);
            function JigPromptOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._specialCursorType = 0;
                this._userInputControls = 0;
                this._useDefaultValue = false;
            }
            Object.defineProperty(JigPromptOptions.prototype, "specialCursorType", {
                get: /**
                * Gets or sets the cursor to be associated with the prompt.
                * @Type Acad.CursorType
                */
                function () {
                    return this._specialCursorType;
                },
                set: function (x) {
                    var col = Acad.CursorType;
                    var isValid = false;
                    for (var name in col) {
                        if (name == x) {
                            this._specialCursorType = x;
                            isValid = true;
                            break;
                        }
                    }

                    if (!isValid) {
                        throw new TypeError('Type of specialCursorType should be Acad.CursorType.');
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(JigPromptOptions.prototype, "userInputControls", {
                get: /**
                * Sets or gets the bitwise OR'd value of all user input control.
                * The settings in effect at the present time for this particular jig.
                * @Type Acad.UserInputControls
                */
                function () {
                    return this._userInputControls;
                },
                set: function (x) {
                    if (Acad.isInteger(x))
                        this._userInputControls = x;
else
                        throw new TypeError('Type of userInputControls should be Acad.UserInputControls.');
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(JigPromptOptions.prototype, "useDefaultValue", {
                get: /**
                * Gets or sets whether the prompt should use the default value when
                * the user presses ENTER without any other input. The property allowing
                * client code to set the default value is declared by derived classes.
                * @Type boolean
                *
                */
                function () {
                    return this._useDefaultValue;
                },
                set: function (x) {
                    if (typeof (x) == 'boolean')
                        this._useDefaultValue = x;
else
                        throw new TypeError('Type of useDefaultValue should be boolean.');
                },
                enumerable: true,
                configurable: true
            });
            return JigPromptOptions;
        })(PromptOptions);
        AutoCAD.JigPromptOptions = JigPromptOptions;

        /**
        * This is the base class for jig prompt options used in various types of data acquisition.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        */
        var JigPromptGeometryOptions = (function (_super) {
            __extends(JigPromptGeometryOptions, _super);
            function JigPromptGeometryOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._basePoint = new Acad.Point3d(0, 0, 0);
                this._useBasePoint = true;
            }
            Object.defineProperty(JigPromptGeometryOptions.prototype, "basePoint", {
                get: /**
                * Gets or sets the base point to be used by the prompt.
                * @Type Point3d
                */
                function () {
                    return this._basePoint;
                },
                set: function (x) {
                    if (x instanceof Acad.Point3d) {
                        this._basePoint = x;
                        this._useBasePoint = true;
                    } else {
                        throw new TypeError('Point should be of Point3d type.');
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(JigPromptGeometryOptions.prototype, "useBasePoint", {
                get: /**
                * Gets or sets whether the base point is to be used or not.
                * @Type boolean
                */
                function () {
                    return this._useBasePoint;
                },
                set: function (x) {
                    if (typeof (x) == 'boolean')
                        this._useBasePoint = x;
else
                        throw Error('Type of useBasePoint should be boolean.');
                },
                enumerable: true,
                configurable: true
            });
            return JigPromptGeometryOptions;
        })(JigPromptOptions);
        AutoCAD.JigPromptGeometryOptions = JigPromptGeometryOptions;

        /**
        * This class represents optional parameters for prompt for distance during jigging.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        *
        */
        var JigPromptDistanceOptions = (function (_super) {
            __extends(JigPromptDistanceOptions, _super);
            function JigPromptDistanceOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._defaultValue = 0.0;
            }
            Object.defineProperty(JigPromptDistanceOptions.prototype, "defaultValue", {
                get: /**
                * Gets or sets default jig prompt distance options value.
                * @Type Number
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (Acad.isNumber(x)) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be Number.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return JigPromptDistanceOptions;
        })(JigPromptGeometryOptions);
        AutoCAD.JigPromptDistanceOptions = JigPromptDistanceOptions;

        /**
        * This class represents optional parameters for prompt for angle during jigging.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        */
        var JigPromptAngleOptions = (function (_super) {
            __extends(JigPromptAngleOptions, _super);
            function JigPromptAngleOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._defaultValue = 0.0;
                //  super.useBasePoint = true;
            }
            Object.defineProperty(JigPromptAngleOptions.prototype, "defaultValue", {
                get: /**
                * Returns the default jig prompt angle options value.
                * @Type Number
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (Acad.isNumber(x)) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Default value should be Number.');
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(JigPromptAngleOptions.prototype, "useBasePoint", {
                get: /**
                * Gets whether the base point is to be used or not.
                * useBasePoint is always true as there must be a base point when prompt for angle during jigging.
                * @Read-Only
                * @Type boolean
                */
                function () {
                    return this._useBasePoint;
                },
                set: function (x) {
                    throw Error("useBasePoint is read-only property");
                },
                enumerable: true,
                configurable: true
            });
            return JigPromptAngleOptions;
        })(JigPromptGeometryOptions);
        AutoCAD.JigPromptAngleOptions = JigPromptAngleOptions;

        /**
        * This class represents optional parameters for prompt for point during jigging.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        */
        var JigPromptPointOptions = (function (_super) {
            __extends(JigPromptPointOptions, _super);
            function JigPromptPointOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._defaultValue = new Acad.Point3d(0, 0, 0);
            }
            Object.defineProperty(JigPromptPointOptions.prototype, "defaultValue", {
                get: /**
                *  Returns the default value to be used for point option prompt.
                * @Type Acad.Point3d
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (x instanceof Acad.Point3d) {
                        this._defaultValue = x;
                    } else {
                        throw new TypeError('Point should be of Point3d type.');
                    }
                },
                enumerable: true,
                configurable: true
            });
            return JigPromptPointOptions;
        })(JigPromptGeometryOptions);
        AutoCAD.JigPromptPointOptions = JigPromptPointOptions;

        /**
        * This class represents optional parameters for prompt for string during jigging.
        * @param messageAndKeywords is the prompt message along with Keywords.
        * @throws TypeError
        */
        var JigPromptStringOptions = (function (_super) {
            __extends(JigPromptStringOptions, _super);
            function JigPromptStringOptions(messageAndKeywords) {
                _super.call(this, messageAndKeywords);
                this._defaultValue = "";
            }
            Object.defineProperty(JigPromptStringOptions.prototype, "defaultValue", {
                get: /**
                * Returns the default value to be used for string option prompt.
                * @Type String
                */
                function () {
                    return this._defaultValue;
                },
                set: function (x) {
                    if (typeof (x) == 'string')
                        this._defaultValue = x;
else
                        throw new TypeError('Default value should be String.');
                },
                enumerable: true,
                configurable: true
            });
            return JigPromptStringOptions;
        })(JigPromptOptions);
        AutoCAD.JigPromptStringOptions = JigPromptStringOptions;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    (function (AutoCAD) {
        /**
        * This is the base class for classes that hold the result of a prompt operation.
        * @param retCode The status result of the prompt operation.
        * @param stringResult The optional string result of the prompt operation.
        * This value is set when Status is PromptStatus.Keyword or a prompt that returns a string as its primary result.
        *
        */
        var PromptResults = (function (_super) {
            __extends(PromptResults, _super);
            function PromptResults(retCode, stringResult) {
                if (typeof stringResult === "undefined") { stringResult = ""; }
                _super.call(this);
                this.status = retCode;
                this.stringResult = stringResult;
            }
            return PromptResults;
        })(Acad.Promise);
        AutoCAD.PromptResults = PromptResults;
        ;

        /**
        * This class holds the result of a prompt that returns an integer as its primary result.
        * @param retCode The status result of the prompt operation.
        * @param stringResult The optional string result of the prompt operation.
        * @param value The integer that the user entered.
        *
        */
        var PromptIntegerResult = (function (_super) {
            __extends(PromptIntegerResult, _super);
            function PromptIntegerResult(retCode, stringResult, value) {
                _super.call(this, retCode, stringResult);
                if (retCode == Acad.PromptStatus.OK)
                    this.value = value;
            }
            return PromptIntegerResult;
        })(PromptResults);
        AutoCAD.PromptIntegerResult = PromptIntegerResult;
        ;

        /**
        * This class holds the result of a prompt that returns a double as its primary result.
        * @param retCode The status result of the prompt operation.
        * @param stringResult The optional string result of the prompt operation.
        * @param value The double that the user entered.
        *
        */
        var PromptDoubleResult = (function (_super) {
            __extends(PromptDoubleResult, _super);
            function PromptDoubleResult(retCode, stringResult, value) {
                _super.call(this, retCode, stringResult);
                if (retCode == Acad.PromptStatus.OK)
                    this.value = value;
            }
            return PromptDoubleResult;
        })(PromptResults);
        AutoCAD.PromptDoubleResult = PromptDoubleResult;
        ;

        /**
        * This class holds the result of a prompt that returns a point as its primary result.
        * @param retCode The status result of the prompt operation.
        * @param stringResult The optional string result of the prompt operation.
        * @param point The point that the user entered.
        * @throws TypeError
        *
        */
        var PromptPointResult = (function (_super) {
            __extends(PromptPointResult, _super);
            function PromptPointResult(retCode, stringResult, point) {
                _super.call(this, retCode, stringResult);
                if (retCode == Acad.PromptStatus.OK) {
                    if (point instanceof Acad.Point3d)
                        this.value = point;
else
                        throw new TypeError("Point should be of Point3d type.");
                }
            }
            return PromptPointResult;
        })(PromptResults);
        AutoCAD.PromptPointResult = PromptPointResult;
        ;

        /**
        * This class holds the result of a prompt that returns an entity as its primary result.
        * @param retCode The status result of the prompt operation.
        * @param stringResult The optional string result of the prompt operation.
        * @param objectId The entity that the user picked.
        * @param point The point that was used to pick the entity.
        * @throws TypeError
        *
        */
        var PromptEntityResult = (function (_super) {
            __extends(PromptEntityResult, _super);
            function PromptEntityResult(retCode, stringResult, objectId, point) {
                _super.call(this, retCode, stringResult);
                this.objectId = objectId;
                if (point instanceof Acad.Point3d)
                    this.pickedPoint = point;
else
                    throw new TypeError("Point should be of Point3d type.");
            }
            return PromptEntityResult;
        })(PromptResults);
        AutoCAD.PromptEntityResult = PromptEntityResult;
        ;

        /**
        * This class holds the result of a prompt that returns a nested entity as its primary result.
        * @param retCode The status result of the prompt operation.
        * @param stringResult the optional string result of the prompt operation.
        * @param objectId The entity that the user picked.
        * @param point The point that was used to pick the entity.
        * @param xform The transformation matrix that is applied to the picked object by its containers.
        * @param objectIds Collection of nested enities object Ids.
        * @throws TypeError
        *
        */
        var PromptNestedEntityResult = (function (_super) {
            __extends(PromptNestedEntityResult, _super);
            function PromptNestedEntityResult(retCode, stringResult, objectId, point, xform, objectIds) {
                _super.call(this, retCode, stringResult, objectId, point);
                if (xform instanceof Acad.Matrix3d) {
                    for (var i = 0; i < 4; ++i) {
                        for (var j = 0; j < 4; ++j)
                            this.matrix[i][j] = xform[i][j];
                    }
                } else
                    throw new TypeError("matrix should be of Matrix3d type.");

                if (objectIds instanceof Array)
                    this.containers = objectIds;
else
                    throw new TypeError("objectIds should be of Array type.");
            }
            return PromptNestedEntityResult;
        })(PromptEntityResult);
        AutoCAD.PromptNestedEntityResult = PromptNestedEntityResult;
        ;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="PromptResults.ts"/>
    (function (AutoCAD) {
        /**
        * This class provides optional parameters to a selection set prompt.
        *
        */
        var PromptSelectionOptions = (function () {
            function PromptSelectionOptions() {
                this.allowDuplicates = false;
                this.messageForAdding = "";
                this.messageForRemoval = "";
                this.singlePickInSpace = false;
                this.selectEverythingInAperture = false;
                this.singleOnly = false;
                this.rejectObjectsOnLockedLayers = false;
                this.rejectObjectsFromNonCurrentSpace = false;
                this.rejectPaperspaceViewport = false;
            }
            return PromptSelectionOptions;
        })();
        AutoCAD.PromptSelectionOptions = PromptSelectionOptions;
        ;

        /*
        * This is the base class for a selected object.
        *
        */
        var SelectedObject = (function () {
            function SelectedObject() {
                this.objectId = undefined;
                this.gsMarker = undefined;
            }
            return SelectedObject;
        })();
        AutoCAD.SelectedObject = SelectedObject;

        /**
        * This class represents the result of a prompt for a selection of objects.
        * @param status is the status result of the prompt operation.
        * @param objectIds is the array of SelectedObject.
        * @throws TypeError
        *
        */
        var PromptSelectionResult = (function (_super) {
            __extends(PromptSelectionResult, _super);
            function PromptSelectionResult(status, objectIds) {
                _super.call(this, status);
                if (objectIds instanceof Array)
                    this.value = objectIds;
else
                    throw new TypeError("objectIds should be of Array type.");
            }
            return PromptSelectionResult;
        })(Acad.PromptResults);
        AutoCAD.PromptSelectionResult = PromptSelectionResult;
        ;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="Application.ts"/>
    /**
    * This class represents system variable collection
    *
    */
    (function (AutoCAD) {
        (function (SystemVariableCollection) {
            SystemVariableCollection.systemVariables = {};
            var eventname = { "SysVarsChanged": "SysVarsChanged" };
            var sysvarToCallback = {};
            var isRegistered = false;

            /**
            * This function is for internal use.
            *
            */
            function addReactor(sysvars) {
                if (!isRegistered) {
                    // This is the common callback for stub side. This callback will call the respective callbacks for the registered collections
                    Acad.SysVarCollectionInterop.addHandler_sysVarChanged(systemVariableCollectionCallback);
                    isRegistered = true;
                }

                if (name == undefined) {
                    throw Error("Please provide name of System Variables.");
                }

                Acad.SysVarCollectionInterop.addSysVarReactor(sysvars);
            }

            /**
            * This function is for internal use.
            *
            */
            function removeReactor(sysvars) {
                Acad.SysVarCollectionInterop.removeSysVarReactor(sysvars);
            }

            function parseSysVarValue(sysVarValue) {
                var rawValue;
                switch (sysVarValue.type) {
                    case Acad.ResultValueType.RTPOINT:
                        var pt = JSON.parse(sysVarValue.value);
                        rawValue = new Acad.Point2d(pt.x, pt.y);
                        break;
                    case Acad.ResultValueType.RT3DPOINT:
                        var pt = JSON.parse(sysVarValue.value);
                        rawValue = new Acad.Point3d(pt.x, pt.y, pt.z);
                        break;
                    case Acad.ResultValueType.RTANG:
                    case Acad.ResultValueType.RTLONG:
                    case Acad.ResultValueType.RTORINT:
                    case Acad.ResultValueType.RTREAL:
                    case Acad.ResultValueType.RTSHORT:
                        rawValue = JSON.parse(sysVarValue.value);
                        break;
                    default:
                        rawValue = sysVarValue.value;
                        break;
                }
                return rawValue;
            }

            /*
            *Inside this internal function we call the registered callbacks with the respective sysvar changes they are intereseted in.
            */
            function systemVariableCollectionCallback(changedSysvars) {
                for (var i = 0; i < changedSysvars.length; ++i) {
                    changedSysvars[i].oldvalue = parseSysVarValue(changedSysvars[i].oldvalue);
                    changedSysvars[i].newvalue = parseSysVarValue(changedSysvars[i].newvalue);
                }

                // Construct callbackToSysvar Map
                var callbackToSysvar = {};

                // Using callbacks directly as keys for the map is expensive. So, this array is used for some book keeping.
                // The index of the callback in the array is used as the key instead.
                var callbackArray = [];

                for (var i = 0; i < changedSysvars.length; ++i) {
                    var sysvar = changedSysvars[i];
                    var callbacks = sysvarToCallback[sysvar.name];

                    for (var j = 0; j < callbacks.length; ++j) {
                        var callback = callbacks[j];
                        if (callback.acad_sysvar_callback_index == undefined) {
                            //create a new entry in callbackArray and callbackToSysvar map
                            var index = callbackArray.length;

                            callback.acad_sysvar_callback_index = index;
                            callbackArray.push(callback);

                            callbackToSysvar[index] = [];
                            callbackToSysvar[index].push(sysvar);
                        } else {
                            callbackToSysvar[callback.acad_sysvar_callback_index].push(sysvar);
                        }
                    }
                }

                for (var i = 0; i < callbackArray.length; ++i) {
                    var callback = callbackArray[i];
                    var args = callbackToSysvar[callback.acad_sysvar_callback_index];

                    //remove temporary augmented property "acad_sysvar_callback_index"
                    delete callback.acad_sysvar_callback_index;

                    callback(eventname.SysVarsChanged, args);
                }
            }

            /**
            * This function is used to add callback for collection of sysVars.
            * @param sysvars is comma seperated list of sysVars for which notification will be sent.
            * @param callback is a callback function, which is called when an event occurs.
            * @throws TypeError
            * @throws Error
            *
            */
            function addEventListener(sysvars, callback) {
                if (typeof sysvars != 'string')
                    throw TypeError("sysvars should be of type string.");

                if (typeof callback != 'function')
                    throw TypeError("callback should be of type function.");

                // Register callback
                var sysvarNames = sysvars.split(",");

                //Check if we have added reactor all of these sysVars. If so we can avoid call into stub
                //or pass only required sysVars into stub - optimization.The newSysvarNames variable will
                //capture the sysVars for which reactor is not yet added.
                var newSysvarNames = [];

                for (var i = 0; i < sysvarNames.length; ++i) {
                    if (sysvarToCallback[sysvarNames[i]] == undefined)
                        newSysvarNames.push(sysvarNames[i]);
                }

                if (newSysvarNames.length > 0) {
                    var strNewSysvarNames = "";
                    for (var i = 0; i < newSysvarNames.length; ++i)
                        strNewSysvarNames += newSysvarNames[i] + ",";

                    strNewSysvarNames = strNewSysvarNames.substring(0, strNewSysvarNames.length - 1);

                    try  {
                        addReactor(strNewSysvarNames);
                    } catch (e) {
                        throw Error("Error occured during registering sysvars");
                    }
                }

                for (var i = 0; i < newSysvarNames.length; ++i)
                    sysvarToCallback[newSysvarNames[i]] = [];

                for (var i = 0; i < sysvarNames.length; ++i) {
                    if (sysvarToCallback[sysvarNames[i]].indexOf(callback) == -1)
                        sysvarToCallback[sysvarNames[i]].push(callback);
                }
            }
            SystemVariableCollection.addEventListener = addEventListener;

            /**
            * This function is used to remove callback.
            * @param sysvars is comma seperated list of sysVars for which callback would be removed.
            * @param callback is a callback function, which would not be called further for given eventname.
            * @throws TypeError
            * @throws Error
            *
            */
            function removeEventListener(sysvars, callback) {
                if (typeof sysvars != 'string')
                    throw TypeError("sysvars should be of type string.");

                if (typeof callback != 'function')
                    throw TypeError("callback should be of type function.");

                var sysvarNames = sysvars.split(",");
                var sysvarsToUnregister = [];

                for (var i in sysvarNames) {
                    var sysvarName = sysvarNames[i];
                    if (sysvarToCallback[sysvarName] != undefined) {
                        var index = sysvarToCallback[sysvarName].indexOf(callback);

                        if (index != -1) {
                            sysvarToCallback[sysvarName].splice(index, 1);

                            if (sysvarToCallback[sysvarName].length == 0) {
                                try  {
                                    removeReactor(sysvarName);
                                    delete sysvarToCallback[sysvarName];
                                } catch (e) {
                                    throw Error("Error occured during unregistering sysvars");
                                }
                            }
                        }
                    }
                }
            }
            SystemVariableCollection.removeEventListener = removeEventListener;

            /**
            * This function returns the system variable
            * @param name is name of system variable.
            *
            */
            function getSystemVariable(name) {
                if (name == undefined)
                    throw Error("Please provide name of System Variable.");

                if (SystemVariableCollection.systemVariables.hasOwnProperty(name)) {
                    return SystemVariableCollection.systemVariables[name];
                }

                var sysVarInterop = Acad.SysVarCollectionInterop.getSysVar(name);

                var sysVar = new AutoCAD.SystemVariable(sysVarInterop.name, sysVarInterop.valueType, sysVarInterop.value, sysVarInterop.isActive, sysVarInterop.minimum, sysVarInterop.maximum);
                SystemVariableCollection.systemVariables[name] = sysVar;
                return sysVar;
            }
            SystemVariableCollection.getSystemVariable = getSystemVariable;
        })(AutoCAD.SystemVariableCollection || (AutoCAD.SystemVariableCollection = {}));
        var SystemVariableCollection = AutoCAD.SystemVariableCollection;

        /**
        * This class represent system variable
        * @param sName is the name of system variable.
        * @param type is type of resource buffer.
        * @param sValue is the value of system variable .
        * @param active indicates whether the system varibale is active or not.
        * @param min is minimum value of system variable.
        * @param max is maximum value of system variable.
        *
        */
        var SystemVariable = (function () {
            function SystemVariable(sName, type, sValue, active, min, max) {
                this.eventObject = new Acad.EventObject();
                this.isReactorAdded = false;
                this._name = sName;
                this._valueType = type;
                this._value = sValue;
                this._isActive = active;
                this._minimum = min;
                this._maximum = max;
            }
            Object.defineProperty(SystemVariable.prototype, "name", {
                get: /**
                * This property is used to get system variable name.
                * @Type String
                * @Read-Only
                * @throws Error
                *
                */
                function () {
                    return this._name;
                },
                set: function (x) {
                    throw Error("name is read-only property");
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SystemVariable.prototype, "valueType", {
                get: /**
                * This property is used to get system variable value type.
                * @Type Acad.ResultValueType
                * @Read-Only
                * @throws Error
                *
                */
                function () {
                    return this._valueType;
                },
                set: function (x) {
                    throw Error("valueType is read-only property");
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SystemVariable.prototype, "minimum", {
                get: /**
                * This property is used to get system variable minimum value.
                * @Type Number
                * @Read-Only
                * @throws Error
                *
                */
                function () {
                    return this._minimum;
                },
                set: function (x) {
                    throw Error("minimum is read-only property");
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SystemVariable.prototype, "maximum", {
                get: /**
                * This property is used to get system variable maximum value.
                * @Type Number
                * @Read-Only
                * @throws Error
                *
                */
                function () {
                    return this._maximum;
                },
                set: function (x) {
                    throw Error("maximum is read-only property");
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SystemVariable.prototype, "isActive", {
                get: /**
                * This property is used to get system variable status.
                * @Type boolean
                * @Read-Only
                * @throws Error
                *
                */
                function () {
                    var jsonObj = Acad.SysVarCollectionInterop.getSysVar(this._name);
                    this._isActive = jsonObj.isActive;
                    return this._isActive;
                },
                set: function (x) {
                    throw Error("isActive is read-only property");
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SystemVariable.prototype, "value", {
                get: /**
                * This property is used to get/set system variable value.
                * @Type Acad.ResultValueType
                * @throws Error
                * @throws TypeError
                *
                */
                function () {
                    var jsonObj = Acad.SysVarCollectionInterop.getSysVar(this._name);
                    switch (this._valueType) {
                        case Acad.ResultValueType.RTPOINT:
                            var pt = JSON.parse(jsonObj.value);
                            this._value = new Acad.Point2d(pt.x, pt.y);
                            break;
                        case Acad.ResultValueType.RT3DPOINT:
                            var pt = JSON.parse(jsonObj.value);
                            this._value = new Acad.Point3d(pt.x, pt.y, pt.z);
                            break;
                        case Acad.ResultValueType.RTANG:
                        case Acad.ResultValueType.RTLONG:
                        case Acad.ResultValueType.RTORINT:
                        case Acad.ResultValueType.RTREAL:
                        case Acad.ResultValueType.RTSHORT:
                            this._value = JSON.parse(jsonObj.value);
                            break;
                        default:
                            this._value = jsonObj.value;
                            break;
                    }
                    return this._value;
                },
                set: function (valToSet) {
                    this.checkIfValidValue(valToSet);

                    var strVal;
                    if (typeof valToSet != "string")
                        strVal = JSON.stringify(valToSet);
else
                        strVal = valToSet;

                    var typedValueInterop = {
                        value: strVal,
                        type: this._valueType
                    };

                    var ret = Acad.SysVarCollectionInterop.setSysVarValue(this._name, typedValueInterop);
                },
                enumerable: true,
                configurable: true
            });

            SystemVariable.prototype.checkIfValidValue = function (val) {
                switch (this._valueType) {
                    case Acad.ResultValueType.RTSHORT:
                    case Acad.ResultValueType.RTLONG:
                        if (!(Acad.isInteger(val)))
                            throw TypeError("value is not Integer type.");
                        break;
                    case Acad.ResultValueType.RTREAL:
                    case Acad.ResultValueType.RTANG:
                        if (typeof val != 'number')
                            throw TypeError("value is not number.");
                        break;
                    case Acad.ResultValueType.RTSTR:
                        if (typeof val != 'string')
                            throw TypeError("value is not string.");
                        break;
                    case Acad.ResultValueType.RTPOINT:
                        if (!(val instanceof Acad.Point2d))
                            throw TypeError("Point should be of Point2d type.");
                        break;
                    case Acad.ResultValueType.RT3DPOINT:
                        if (!(val instanceof Acad.Point3d))
                            throw TypeError("Point should be of Point3d type.");
                        break;
                    default:
                        break;
                }
            };

            /**
            * This function is used to set system variable value using command.
            * @remarks This is asynchronous function call. It will not return error if the value is not set successfully.
            * @remarks You should check if the value is set successfully in the listener callback function.
            * @param sValue is value of system variable.
            * @throws Error
            * @throws TypeError
            */
            SystemVariable.prototype.postValue = function (sValue) {
                this.checkIfValidValue(sValue);

                var strVal;
                if (typeof sValue != "string")
                    strVal = JSON.stringify(sValue);
else
                    strVal = sValue;

                var typedValueInterop = {
                    value: strVal,
                    type: this._valueType
                };

                return Acad.SysVarCollectionInterop.postSysVarValue(this._name, typedValueInterop);
            };
            return SystemVariable;
        })();
        AutoCAD.SystemVariable = SystemVariable;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="PromptOptions.ts"/>
    (function (AutoCAD) {
        /**
        * This class represents base jig class
        * @param updateCallback is of type function and is the callback for update during jigging.
        * @param options is of type Acad.JigPromptPointOptions, Acad.JigPromptDistanceOptions, Acad.JigPromptAngleOptions or Acad.JigPromptStringOptions.
        *
        */
        var Jig = (function () {
            function Jig(updateCallback, options) {
                if (typeof (updateCallback) != 'function') {
                    throw TypeError("updateCallback should be function type.");
                }

                if (!((options instanceof Acad.JigPromptPointOptions) || (options instanceof Acad.JigPromptDistanceOptions) || (options instanceof Acad.JigPromptAngleOptions) || (options instanceof Acad.JigPromptStringOptions))) {
                    throw TypeError("options should be of type Acad.JigPromptPointOptions, Acad.JigPromptDistanceOptions, Acad.JigPromptAngleOptions or Acad.JigPromptStringOptions.");
                }

                this._onUpdate = updateCallback;
                this._jigOptions = options;

                var obj = this;
                AutoCAD.JigInterop.setHandler_updateEvent(function (eventArgs) {
                    obj.UpdateEventCallback(eventArgs);
                });
            }
            // Create a callback handler which delegate callback notifications..
            Jig.prototype.UpdateEventCallback = function (eventArgs) {
                if (!eventArgs) {
                    return;
                }

                var args = {};
                args[eventArgs.keyName] = eventArgs.keyValue.value;

                this._onUpdate(args);
            };

            Object.defineProperty(Jig.prototype, "onUpdate", {
                get: /**
                * onUpdate is of type function and is the callback for update during jigging.
                * @Read-Only
                * @Type Boolean
                */
                function () {
                    return this._onUpdate;
                },
                set: function (val) {
                    throw Error("onUpdate is read-only property");
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Jig.prototype, "jigOptions", {
                get: /**
                * jigPromptOptions is of type Acad.JigPromptPointOptions, Acad.JigPromptDistanceOptions, Acad.JigPromptAngleOptions or Acad.JigPromptStringOptions.
                * @Read-Only
                * @Type Boolean
                */
                function () {
                    return this._jigOptions;
                },
                set: function (val) {
                    throw Error("jigOptions is read-only property");
                },
                enumerable: true,
                configurable: true
            });
            return Jig;
        })();
        AutoCAD.Jig = Jig;

        /**
        * This class represents jig class for drawing transient jigging
        * @param updateCallback is of type function and is the callback for update of transient during jigging.
        * @param options is of type Acad.JigPromptPointOptions, Acad.JigPromptDistanceOptions, Acad.JigPromptAngleOptions or Acad.JigPromptStringOptions.
        *
        */
        var DrawJig = (function (_super) {
            __extends(DrawJig, _super);
            function DrawJig(updateCallback, options) {
                _super.call(this, updateCallback, options);
            }
            /**
            * Add or update transient entity during jigging.
            * @param xmlData is of type string and is the XML for the drawable transient.
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            *
            */
            DrawJig.prototype.update = function (xmlData) {
                if (typeof (xmlData) !== 'string') {
                    throw TypeError('xmlData should be of type string');
                }
                ;
                return AutoCAD.JigInterop.update(xmlData);
            };
            return DrawJig;
        })(Jig);
        AutoCAD.DrawJig = DrawJig;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="Application.ts"/>
    (function (AutoCAD) {
        /**
        * @class Acad.DataItemCollectionManager
        * This is the controller object that is used to create and manage the
        * dataItemCollectionSet.
        */
        (function (DataItemCollectionManager) {
            DataItemCollectionManager.dataItemCollectionSet = new Array();
            var handlerAdded = handlerAdded || false;
            var eventName = {
                "collectionChanged": "collectionChanged",
                "itemsChanged": "itemsChanged",
                "reset": "reset"
            };

            /**
            * This asynchronous method can be used to get a known collection.
            * @method DataItemCollectionManager.getKnownCollection
            * @param colName is the name of the collection to get
            * @param onComplete is a function type called on successful completion of this method.
            * @param onError is a function type called if an error occurs.
            * @return Acad.DataItemCollection
            */
            function getKnownCollection(colName) {
                if (!handlerAdded) {
                    handlerAdded = true;
                    AutoCAD.DataItemCollectionManagerInterop.addHandler_resetEvent(reset_event);
                    AutoCAD.DataItemCollectionManagerInterop.addHandler_collectionChangedEvent(collectionchanged_event);
                    AutoCAD.DataItemCollectionManagerInterop.addHandler_itemsChangedEvent(itemschanged_event);
                }

                if (typeof (colName) !== 'string')
                    throw TypeError('collection name should be of type string');

                var promise = new Autodesk.JavaScript.Promise();

                var collection;

                if (DataItemCollectionManager.dataItemCollectionSet[colName] == undefined) {
                    // Create the collection if it does not exist and cache it.
                    collection = new AutoCAD.DataItemCollection(colName);

                    DataItemCollectionManager.dataItemCollectionSet[colName] = collection;

                    AutoCAD.DataItemCollectionManagerInterop.getKnownCollection(colName).then(function (retvalue) {
                        var obj = retvalue;

                        if (obj.retCode !== Acad.ErrorStatus.eJsOk) {
                            if (obj.retErrorString == undefined)
                                promise.error(obj.retCode);
else
                                promise.error(obj.retCode, obj.retErrorString);
                            return;
                        }
                        if (obj) {
                            var thisColl = DataItemCollectionManager.dataItemCollectionSet[obj.collectionName];
                            for (var index = 0; index < obj.dataItems.length; ++index) {
                                thisColl.dataItems.push(new AutoCAD.DataItem(obj.dataItems[index].id, obj.dataItems[index].name));
                            }
                            promise.success(thisColl);
                        }
                    }, function (retCode, retErrorString) {
                        delete DataItemCollectionManager.dataItemCollectionSet[colName];
                        if (retErrorString == undefined)
                            promise.error(retCode);
else
                            promise.error(retCode, retErrorString);
                    });
                } else {
                    // use the cached collection.
                    collection = DataItemCollectionManager.dataItemCollectionSet[colName];

                    //setTimeout(function(){promise.success(collection);},100);
                    promise.then = function (success, error) {
                        success(collection);
                    };
                }
                return promise;
            }
            DataItemCollectionManager.getKnownCollection = getKnownCollection;

            /**
            * This Function is for internal use
            * Callback for reset event
            * 1. Updates cache dataItemCollectionSet
            * 2. Dispatches the event to respective EventObjects
            */
            function reset_event(args) {
                var obj = args;

                if (!obj) {
                    return;
                }

                var eventname = eventName["reset"];
                var collection = DataItemCollectionManager.dataItemCollectionSet[obj.collectionName];
                if (!collection) {
                    return;
                }
                var dataItems = collection.dataItems;

                // Clear the dataItem array.
                dataItems.length = 0;

                // Add newItems to the dataItems array.
                var dataitems = obj.dataItems;
                var newItemsCount = dataitems.length;
                for (var i = 0; i < newItemsCount; i++) {
                    dataItems[i] = new AutoCAD.DataItem(dataitems[i].id, dataitems[i].name);
                }
                collection.dispatchEvent(eventname, dataItems);
            }

            /**
            * This Function is for internal use
            * Callback for collectionchanged_event
            * 1. Updates cache dataItemCollectionSet
            * 2. Dispatches the event to respective EventObjects
            */
            function collectionchanged_event(args) {
                var obj = args;

                if (!obj) {
                    return;
                }
                var collection = DataItemCollectionManager.dataItemCollectionSet[obj.collectionName];
                if (!collection) {
                    return;
                }
                var dataItems = collection.dataItems;
                var eventname = eventName["collectionChanged"];

                // Remove oldItems from the dataItems array first.
                var olditems = obj.oldItems;
                var oldItemsCount = olditems.length;
                for (var i = 0; i < oldItemsCount; i++) {
                    var dataItemsCount = dataItems.length;
                    for (var j = 0; j < dataItemsCount; j++) {
                        if (dataItems[j].id == olditems[i].id) {
                            dataItems.splice(j, 1);
                            break;
                        }
                    }
                }

                // Add newItems to the dataItems array.
                var newitems = obj.newItems;
                var newItemsCount = newitems.length;
                var startIndex = collection.dataItems.length;

                for (var i = 0; i < newItemsCount; i++) {
                    dataItems[i + startIndex] = new AutoCAD.DataItem(newitems[i].id, newitems[i].name);
                }
                collection.dispatchEvent(eventname, dataItems);
            }

            /**
            * This Function is for internal use
            * Callback for itemschanged_event
            * 1. Updates cache dataItemCollectionSet
            * 2. Dispatches the event to respective EventObjects
            */
            function itemschanged_event(args) {
                var obj = args;

                if (!obj) {
                    return;
                }
                var collection = DataItemCollectionManager.dataItemCollectionSet[obj.collectionName];
                if (!collection) {
                    return;
                }
                var dataItems = collection.dataItems;
                var eventname = eventName["itemsChanged"];

                // Update changed items in the dataItems array.
                var changeditems = obj.changedItems;
                var changedItemsCount = changeditems.length;
                for (var i = 0; i < changedItemsCount; i++) {
                    var dataItemsCount = dataItems.length;
                    for (var j = 0; j < dataItemsCount; j++) {
                        if (dataItems[j].id == changeditems[i].id) {
                            // At position j, assign the changeditems values to dataItems values.
                            dataItems[j].name = changeditems[i].name;
                            break;
                        }
                    }
                }

                //inform about the changed items
                collection.dispatchEvent(eventname, changeditems);
            }
        })(AutoCAD.DataItemCollectionManager || (AutoCAD.DataItemCollectionManager = {}));
        var DataItemCollectionManager = AutoCAD.DataItemCollectionManager;
        ;

        /**
        * @class Acad.DataItemCollection
        * This is the controller object that is used to create and manage the
        * dataItemCollection.
        */
        var DataItemCollection = (function () {
            function DataItemCollection(colName) {
                this.eventname = {
                    "collectionChanged": "collectionChanged",
                    "itemsChanged": "itemsChanged",
                    "reset": "reset"
                };
                this.colName = colName;
                this.dataItems = new Array();
                this.eventobject = new AutoCAD.EventObject();
            }
            /*
            *This method can be used to add event listeners for the DataItemCollection
            *@method Acad.DataItemCollection.addEventListener
            *@param eventname is the name of the event to register for. It can be one of the events in Acad.DataItemCollection.eventname
            *@param fn is the callback that is called when the event is triggered
            */
            DataItemCollection.prototype.addEventListener = function (eventname, fn) {
                if (arguments.length != 2) {
                    throw Error('addEventListener() expects 2 arguments');
                }

                if (!this.eventname.hasOwnProperty(eventname))
                    throw TypeError('invalid eventname');

                if (typeof (fn) !== 'function')
                    throw TypeError('event callback should be of type function');

                this.eventobject.addEventListener(eventname, fn);
            };

            /*
            *This method can be used to remove event listeners for the DataItemCollection
            *@method Acad.DataItemCollection.removeEventListener
            *@param eventname is the name of the event to de-register. It can be one of the events in Acad.DataItemCollection.eventname
            *@param fn is the callback that is to be de-registered
            */
            DataItemCollection.prototype.removeEventListener = function (eventname, fn) {
                if (arguments.length != 2) {
                    throw Error('removeEventListener() expects 2 arguments');
                }

                if (!this.eventname.hasOwnProperty(eventname))
                    throw TypeError('invalid eventname');

                if (typeof (fn) !== 'function')
                    throw TypeError('event callback should be of type function');

                this.eventobject.removeEventListener(eventname, fn);
            };

            /*
            *This method can be used to get the name of the DataItemCollection
            *@method Acad.DataItemCollection.getName
            *@returns a string containing the name of the collection
            */
            DataItemCollection.prototype.getName = function () {
                return this.colName;
            };

            /*
            * This Function is for internal use
            */
            DataItemCollection.prototype.dispatchEvent = function (eventname, args) {
                this.eventobject.dispatchEvent(eventname, args);
            };
            return DataItemCollection;
        })();
        AutoCAD.DataItemCollection = DataItemCollection;
        ;

        /**
        * @class Acad.DataItem
        * This is the controller object that is used to create and manage the
        * dataItem.
        */
        var DataItem = (function () {
            function DataItem(id, name) {
                this.id = id;
                this.name = name;
            }
            /**
            * Returns all the properties of this DataItem.
            * @return the properties map(name-value pair).
            */
            DataItem.prototype.getProperties = function () {
                var response = AutoCAD.DataItemInterop.getProperties(this.id);

                var obj = response;
                if (obj.retCode !== Acad.ErrorStatus.eJsOk) {
                    throw Error(obj.retErrorString);
                }
                var properties = {};
                for (var i = 0; i < obj.propertyPairs.length; i++) {
                    properties[obj.propertyPairs[i].key] = obj.propertyPairs[i].value;
                }
                return properties;
            };
            return DataItem;
        })();
        AutoCAD.DataItem = DataItem;
        ;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    //                 (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    ///////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="Acad.ts"/>
    ///<reference path="PromptOptions.ts"/>
    ///<reference path="PromptResults.ts"/>
    ///<reference path="JsSelectionSet.ts"/>
    ///<reference path="Jig.ts"/>
    (function (AutoCAD) {
        (function (Editor) {
            /**
            * The getInteger function is used to get the integer from user.
            * @param opts is of type PromptIntegerOptions
            * @return PromptIntegerResult.
            * @throws TypeError
            *
            */
            function getInteger(options) {
                if (!(options instanceof Acad.PromptIntegerOptions))
                    throw TypeError("Input parameter should be PromptIntegerOptions type.");

                return AutoCAD.EditorInterop.getInteger(options);
            }
            Editor.getInteger = getInteger;
            ;

            /**
            * The getDouble function is used to get the double from user.
            * @param options is of type PromptDoubleOptions
            * @return PromptDoubleResult.
            * @throws TypeError
            *
            */
            function getDouble(options) {
                if (!(options instanceof Acad.PromptDoubleOptions))
                    throw TypeError("Input parameter should be PromptDoubleOptions type.");

                return AutoCAD.EditorInterop.getDouble(options);
            }
            Editor.getDouble = getDouble;
            ;

            /**
            * The getDistance function is used to get user input for a linear distance.
            * @param options is of type PromptDistanceOptions.
            * @return PromptDoubleResult.
            * @throws TypeError
            *
            */
            function getDistance(options) {
                if (!(options instanceof Acad.PromptDistanceOptions))
                    throw TypeError("Input parameter should be PromptDistanceOptions type.");

                return AutoCAD.EditorInterop.getDistance(options);
            }
            Editor.getDistance = getDistance;
            ;

            /**
            * The getAngle function is used to get user input for an angle, taking into account the current value of the ANGBASE system variable.
            * @param options is of type PromptAngleOptions.
            * @return PromptDoubleResult.
            * @throws TypeError
            *
            */
            function getAngle(options) {
                if (!(options instanceof Acad.PromptAngleOptions))
                    throw TypeError("Input parameter should be PromptAngleOptions type.");

                return AutoCAD.EditorInterop.getAngle(options);
            }
            Editor.getAngle = getAngle;
            ;

            /**
            * Gets user input for a keyword.
            * Wraps the acedGetKword() ObjectARX function.
            * The AutoCAD user can enter the keyword from the keyboard. The list of keywords that GetKeywords() accepts is set by a prior call to GetInteger().
            * If the user enters a string not specified in the call to GetInteger(), AutoCAD displays an error message and tries again (and redisplays prompt, if one was specified).
            * If the user types only [Return], GetKeywords() returns an empty string ("") unless the call to GetInteger() also disallowed null input.
            * @param options is of type PromptKeywordOptions
            * @return PromptResult.
            * @throws TypeError
            *
            */
            function getKeywords(options) {
                if (!(options instanceof Acad.PromptKeywordOptions))
                    throw TypeError("Input parameter should be PromptKeywordOptions type.");

                return AutoCAD.EditorInterop.getKeywords(options);
            }
            Editor.getKeywords = getKeywords;
            ;

            /**
            * The getPoint function is used to get user input for a point.
            * @param opts is of type PromptPointOptions.
            * @return PromptPointResult.
            * @throws TypeError
            *
            */
            function getPoint(options) {
                if (!(options instanceof Acad.PromptPointOptions))
                    throw TypeError("Input parameter should be PromptPointOptions type.");

                return AutoCAD.EditorInterop.getPoint(options);
            }
            Editor.getPoint = getPoint;
            ;

            /**
            * The getCorner function is used to Gets user input for the corner of a rectangle.
            * @param opts is of type PromptCornerOptions.
            * @return PromptPointResult.
            * @throws TypeError
            *
            */
            function getCorner(options) {
                if (!(options instanceof Acad.PromptCornerOptions))
                    throw TypeError("Input parameter should be PromptCornerOptions type.");

                return AutoCAD.EditorInterop.getCorner(options);
            }
            Editor.getCorner = getCorner;
            ;

            /**
            * The getString function is used to Gets user input for string.
            * @param opts is of type PromptStringOptions.
            * @return PromptStringResult.
            * @throws TypeError
            *
            */
            function getString(options) {
                if (!(options instanceof Acad.PromptStringOptions))
                    throw TypeError("Input parameter should be PromptStringOptions type.");

                return AutoCAD.EditorInterop.getString(options);
            }
            Editor.getString = getString;

            /**
            * The getSelection function returns the selection set obtained.
            * @param opts is of type PromptSelectionOptions.
            * @return PromptSelectionResult.
            * @throws TypeError
            *
            */
            function getSelection(options) {
                if (!(options instanceof Acad.PromptSelectionOptions))
                    throw TypeError("Input parameter should be PromptSelectionOptions type.");

                return AutoCAD.EditorInterop.getSelection(options);
            }
            Editor.getSelection = getSelection;
            ;

            /**
            * Prompts the user to select an entity by specifying a point.
            * Pauses for user input and returns both an entity name and the point that is used to select the entity.
            * GetEntity() does not return the names of nongraphical objects.
            * @param opts is of type PromptEntityOptions.
            * @return PromptEntityResult.
            * @throws TypeError
            *
            */
            function getEntity(options) {
                if (!(options instanceof Acad.PromptEntityOptions))
                    throw TypeError("Input parameter should be PromptEntityOptions type.");

                return AutoCAD.EditorInterop.getEntity(options);
            }
            Editor.getEntity = getEntity;
            ;

            /**
            * Gets the name of an entity selected by the user and the point used to select the entity.
            * @param opts is of type PromptNestedEntityOptions.
            * @return PromptNestedEntityResult.
            * @throws TypeError
            *
            */
            function getNestedEntity(options) {
                if (!(options instanceof Acad.PromptNestedEntityOptions))
                    throw TypeError("Input parameter should be PromptNestedEntityOptions type.");

                return AutoCAD.EditorInterop.getNestedEntity(options);
            }
            Editor.getNestedEntity = getNestedEntity;
            ;

            /**
            * This method returns false if the host busy processing other commands else returns true.
            * @return boolean.
            * @throws TypeError
            *
            */
            function isQuiescent() {
                return AutoCAD.EditorInterop.isQuiescent();
            }
            Editor.isQuiescent = isQuiescent;
            ;

            /**
            * This method cancels the last command
            * @throws Error
            *
            */
            function cancelCommand() {
                var retCode = AutoCAD.EditorInterop.cancelCommand();
                if (retCode != Acad.ErrorStatus.eJsOk) {
                    throw Error("Error in cancel command");
                }
                return retCode;
            }
            Editor.cancelCommand = cancelCommand;
            ;

            function executeCommandWorker(commands, onSuccess, onError) {
                var count = commands.length;
                if (count < 1) {
                    throw Error('Acad.Editor.executeCommand should be called with atleast one parameter');
                }
                for (var i = 0; i < count; i++) {
                    if (typeof (commands[i]) !== 'string') {
                        throw TypeError('Arguments to Acad.Editor.executeCommand should be of type string');
                    }
                }
                if (onSuccess == null)
                    onSuccess = "";
                if (onError == null)
                    onError = "";

                var retCode = AutoCAD.EditorInterop.executeCommand(commands, onSuccess, onError);
                if (retCode != Acad.ErrorStatus.eJsOk) {
                    throw Error("Error: execute command failed.");
                }
            }

            /**
            * This method accepts variable number of string arguments which is the commands passed to Native environment and it waits for the commnd operation to complete.
            * @param AutoCAD commands as string arguments
            * @throws TypeError
            *
            */
            function executeCommand() {
                var commands = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    commands[_i] = arguments[_i + 0];
                }
                executeCommandWorker(commands, null, null);
            }
            Editor.executeCommand = executeCommand;
            ;

            /**
            * This method accpets variable number of string arguments which is the commands passed to Native environment and it doesnot waits for the commnd operation to complete.It follows promise pattern
            * to receive success and callbacks from native in async fashion
            * @param AutoCAD commands as string arguments
            * @throws TypeError
            *
            */
            var callbackCounter = 0;
            function executeCommandAsync() {
                var commands = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    commands[_i] = arguments[_i + 0];
                }
                var promise = new Autodesk.JavaScript.Promise();
                callbackCounter++;
                var onSuccessName = "ac_eca_onSuccess" + callbackCounter.toString();
                var onErrorName = "ac_eca_onError" + callbackCounter.toString();

                var onSuccess = function (result) {
                    unregisterCallback(onSuccessName);
                    unregisterCallback(onErrorName);

                    if (typeof (promise.success) == 'function') {
                        promise.success(result);
                    }
                };
                var onError = function (result) {
                    unregisterCallback(onSuccessName);
                    unregisterCallback(onErrorName);
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                };

                registerCallback(onSuccessName, onSuccess);
                registerCallback(onErrorName, onError);
                executeCommandWorker(commands, onSuccessName, onErrorName);
                return promise;
            }
            Editor.executeCommandAsync = executeCommandAsync;
            ;

            /**
            * This method registers an AutoCAD command.
            * @param groupName is a string that specifies the command group name to add the command to.
            * @param globalName is a string that specifies the global and untranslated name of the command to add.
            * @param localName is a string that specifies the local and translated name of the command to add.
            * @param flags is an integer that specifies the flag associated with the command.
            * The flags should be either Acad.CommandFlag.TRANSPARENT or Acad.CommandFlag.MODAL,
            * and can be logically ORd with other flags in Acad.CommandFlag.
            * @param jsFunc will be executed when this command is invoked.
            * @throws TypeError
            *
            */
            function addCommand(groupName, globalName, localName, flags, jsFunc) {
                if (typeof (groupName) !== 'string') {
                    throw TypeError('groupName should be of type string');
                }

                if (typeof (globalName) !== 'string') {
                    throw TypeError('globalName should be of type string');
                }

                if (typeof (localName) !== 'string') {
                    throw TypeError('localName should be of type string');
                }

                if (!(Acad.isInteger(flags))) {
                    throw TypeError('flags should be of type integer');
                }

                if (typeof (jsFunc) !== 'function') {
                    throw TypeError("jsFunc should be of type function");
                }

                //syncronously execute the adding of the command, this registers
                //the command with Autocad. autocad will fire a synchronous event,
                //identified by globalName when the command is typed
                var retCode = AutoCAD.EditorInterop.addCommand(groupName, globalName, localName, flags);
                if (retCode != Acad.ErrorStatus.eJsOk) {
                    throw Error("Error: add command failed.");
                }

                //now register a callback with the globalName so that js gets called when the command
                //is invoked
                registerCallback(groupName + "." + globalName, jsFunc);
            }
            Editor.addCommand = addCommand;
            ;

            /**
            * Drag a transient entity during jigging.
            * @param jig is of type Acad.DrawJig.
            * @throws TypeError
            * @return dragStatus of type Acad.DragStatus in success function callback
            *
            */
            function drag(jig) {
                if (!(jig instanceof Acad.DrawJig))
                    throw TypeError("jig should be of type DrawJig.");

                if (jig.jigOptions instanceof Acad.JigPromptPointOptions) {
                    return AutoCAD.EditorInterop.dragPoint(jig.jigOptions);
                } else if (jig.jigOptions instanceof Acad.JigPromptDistanceOptions) {
                    return AutoCAD.EditorInterop.dragDistance(jig.jigOptions);
                } else if (jig.jigOptions instanceof Acad.JigPromptAngleOptions) {
                    return AutoCAD.EditorInterop.dragAngle(jig.jigOptions);
                } else if (jig.jigOptions instanceof Acad.JigPromptStringOptions) {
                    return AutoCAD.EditorInterop.dragString(jig.jigOptions);
                } else {
                    throw TypeError("Options should be one of type Acad.JigPromptPointOptions, Acad.JigPromptDistanceOptions, Acad.JigPromptAngleOptions or Acad.JigPromptStringOptions.");
                }
                return undefined;
            }
            Editor.drag = drag;
        })(AutoCAD.Editor || (AutoCAD.Editor = {}));
        var Editor = AutoCAD.Editor;

        /**
        * This function is for internal use
        *
        */
        function promptExecAsync(param) {
            var promptResult = new Acad.PromptResults(Acad.PromptStatus.OK);
            execAsync(JSON.stringify(param), function (result) {
                if (typeof (promptResult.success) == 'function') {
                    promptResult.success(result);
                }
            }, function (result) {
                if (typeof (promptResult.error) == 'function')
                    promptResult.error(result);
            });

            return promptResult;
        }
        AutoCAD.promptExecAsync = promptExecAsync;
        ;

        (function (Editor) {
            (function (CurrentViewport) {
                /**
                * This method sets the camera parameters needed to define the transformation from world space to
                * normalized device coordinates. All values are specified in the world space coordinate system.
                * Ensure that the camera position and target are distinct. As well, the specified upVector cannot be parallel
                * to the eye vector (computed as the vector from the target to the position). fieldWidth and fieldHeight
                * help define the transformation from view space to normalized device coordinates
                * setView is not supported in Paper Space.
                * @param position of type Acad.Point3d
                * @param target of type Acad.Point3d
                * @param upVector of type Acad.Vector3d
                * @param fieldWidth of type float
                * @param fieldHeight of type float
                * @param projection (Parallel or Perspective )
                * @param animate is boolean
                *
                */
                function setView(position, target, upVector, fieldWidth, fieldHeight, projection, animate) {
                    if (!Acad.isNumber(fieldWidth) || !(fieldWidth > 0)) {
                        throw TypeError('fieldWidth should be a double value and greater than 0');
                    }
                    if (!Acad.isNumber(fieldHeight) || !(fieldHeight > 0)) {
                        throw TypeError('fieldHeight should be a double value and greater than 0');
                    }
                    if (!(position && target && upVector)) {
                        throw Error('position/target/upVector are mandatory.');
                    }
                    if (!(position instanceof Acad.Point3d)) {
                        throw TypeError('position should be of type Acad.Point3d');
                    }
                    if (!(target instanceof Acad.Point3d)) {
                        throw TypeError('target should be of type Acad.Point3d');
                    }
                    if (!(upVector instanceof Acad.Vector3d)) {
                        throw TypeError('upVector should be of type Acad.Vector3d');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (projection && (projection !== Acad.Enum_Projection.Parallel && projection !== Acad.Enum_Projection.Perspective)) {
                        throw TypeError('projection should be  Acad.Enum_Projection.Parallel or Acad.Enum_Projection.Perspective ');
                    }
                    if (!AutoCAD.CurrentViewportInterop.setView(position, target, upVector, fieldWidth, fieldHeight, projection, animate))
                        throw Error("setView failed.");
                }
                CurrentViewport.setView = setView;
                ;

                /**
                * Translates the camera target and position by the specified camera space dolly vector. All other camera parameters
                * are left unaffected. The basis of camera space is as follows: positive Y is along the up vector,
                * positive Z is along the eye vector from the camera position to the camera target, and X is the cross product of those two vectors.
                *
                * @param Input camera space dolly vector of type Acad.Vector3d
                * @param animate is boolean
                *
                */
                function dolly(dollyVector, animate) {
                    if (!(dollyVector)) {
                        throw Error('dollyVector is mandatory.');
                    }
                    if (!(dollyVector instanceof Acad.Vector3d)) {
                        throw TypeError('dollyVector should be of type Acad.Vector3d');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.dolly(dollyVector, animate))
                        throw Error("Dolly failed.");
                }
                CurrentViewport.dolly = dolly;
                ;

                /**
                * Rotates the camera�s up vector about the eye vector by the specified amount in radians. Positive angles correspond to a clockwise rotation when viewed from the camera position to the camera target
                * roll is not supported in Paper Space.
                * @param rollAngle of type double
                * @param animate is boolean
                *
                */
                function roll(rollAngle, animate) {
                    if (!Acad.isNumber(rollAngle)) {
                        throw TypeError('rollAngle should be a double value');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.roll(rollAngle, animate))
                        throw Error("Roll failed!");
                }
                CurrentViewport.roll = roll;
                ;

                /**
                * Orbits the camera. During orbit, the camera target and distance from position to target remain fixed; the camera position moves along the surface of a sphere described by these constraints.
                * The angleX and angleY parameters are in radians and correspond to angles traversed on this sphere along the cross product of the up vector and the eye vector (X) and along the up vector (Y).
                * The angleX component of the orbit is performed before the angleY component
                * orbit is not supported in Paper Space.
                * @param angleX of type double
                * @param angleY of type double
                * @param animate is boolean
                *
                */
                function orbit(angleX, angleY, animate) {
                    if (!(Acad.isNumber(angleX) && Acad.isNumber(angleY))) {
                        throw TypeError('angleX/angleY should be a double value');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.orbit(angleX, angleY, animate))
                        throw Error("Orbit failed!");
                }
                CurrentViewport.orbit = orbit;
                ;

                /**
                * Pans the camera. During pan, the camera position and distance from position to target remain fixed; the camera target moves along the surface of a
                * sphere described by these constraints. The angleX and angleY parameters are in radians and correspond to angles traversed on this sphere along the cross product
                * of the up vector and the eye vector (angleX) and along the up vector (angleY). The angleX component of the pan is performed before the angleY component.
                * pan is not supported in Paper Space.
                * @param angleX of type double
                * @param angleY of type double
                * @param animate is boolean
                *
                */
                function pan(angleX, angleY, animate) {
                    if (!(Acad.isNumber(angleX) && Acad.isNumber(angleY))) {
                        throw TypeError('angleX/angleY should be a double value');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.pan(angleX, angleY, animate))
                        throw Error("Pan failed.");
                }
                CurrentViewport.pan = pan;
                ;

                /**
                * Modifies the current view such that the input bounding box defined by the two extents points is completely within the view.
                * @param minPoint should represent the corner of the box that is defined by the three smallest component values of type Acad.Point3d.
                * @param maxPoint should represent the corner of the box that is defined by the three largest component values of type Acad.Point3d.
                * @param animate is boolean
                */
                function zoomExtents(minPoint, maxPoint, animate) {
                    if (!(minPoint && maxPoint)) {
                        throw Error('minPoint/maxPoint are mandatory.');
                    }
                    if (!(minPoint instanceof Acad.Point3d)) {
                        throw TypeError('minPoint should be of type Acad.Point3d');
                    }
                    if (!(maxPoint instanceof Acad.Point3d)) {
                        throw TypeError('maxPoint should be of type Acad.Point3d');
                    }
                    if (!(maxPoint.x >= minPoint.x && maxPoint.y >= minPoint.y && maxPoint.z >= minPoint.z)) {
                        throw TypeError('maxPoint should be greater than or equal to minPoint');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.zoomExtents(minPoint, maxPoint, animate))
                        throw Error("ZoomExtents failed.");
                }
                CurrentViewport.zoomExtents = zoomExtents;
                ;

                /**
                * Changes the viewing field (the focal length) of the camera to give the effect of dynamically moving in or out of a scene.
                * The camera position and target are not changed. The specified factor must be positive
                * @param zoomFactor is of type double
                * @param animate is boolean
                */
                function zoom(zoomFactor, animate) {
                    if (!Acad.isNumber(zoomFactor) || !(zoomFactor > 0)) {
                        throw TypeError('zoomFactor should be a double value and greater than 0');
                    }
                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.zoom(zoomFactor, animate))
                        throw Error("Zoom failed.");
                }
                CurrentViewport.zoom = zoom;
                ;

                /**
                * Modifies the current view such that the new window displays the region defined by the input screen coordinates.
                * The aspect ratio is automatically maintained.
                * @param lowerLeft Input screen coordinate of the lower-left point of the new zoom window of type Acad.Point2d
                * @param upperRight Input screen coordinate of the upper-right point of the new zoom window of type Acad.Point2d
                * @param animate is boolean
                */
                function zoomWindow(lowerLeft, upperRight, animate) {
                    if (!(lowerLeft && upperRight)) {
                        throw Error('lowerLeft/upperRight are mandatory.');
                    }
                    if (!(lowerLeft instanceof Acad.Point2d)) {
                        throw TypeError('lowerLeft should be of type Acad.Point2d');
                    }
                    if (!(upperRight instanceof Acad.Point2d)) {
                        throw TypeError('upperRight should be of type Acad.Point2d');
                    }
                    if (!(Acad.isInteger(lowerLeft.x) && Acad.isInteger(lowerLeft.y) && Acad.isInteger(upperRight.x) && Acad.isInteger(upperRight.y))) {
                        throw TypeError('lowerLeft/upperRight screen coordinates should be integer');
                    }

                    if (animate && (typeof (animate) !== 'boolean')) {
                        throw TypeError('animate flag should be boolean');
                    }
                    if (!AutoCAD.CurrentViewportInterop.zoomWindow(lowerLeft, upperRight, animate))
                        throw Error("ZoomWindow failed.");
                }
                CurrentViewport.zoomWindow = zoomWindow;
                ;

                /*
                * Returns the 2D point pt on the screen
                * @param Input point to grab of type Acad.Point3d
                * @return 2D point pt on the screen of type Acad.Point2d
                */
                function pointToScreen(inputPoint) {
                    if (!(inputPoint)) {
                        throw Error('inputPoint is mandatory.');
                    }
                    if (!(inputPoint instanceof Acad.Point3d)) {
                        throw TypeError('inputPoint should be of type Acad.Point3d');
                    }
                    var jsonObj = AutoCAD.CurrentViewportInterop.pointToScreen(inputPoint);
                    return new Acad.Point2d(jsonObj.x, jsonObj.y);
                }
                CurrentViewport.pointToScreen = pointToScreen;
                ;

                /*
                * Returns the 3D point pt on the World Coordinate System
                * @param Input point is the screen point of type Acad.Point2d
                * @return 3D point on the World Coordinate System of type Acad.Point3d
                */
                function pointToWorld(inputPoint) {
                    if (!(inputPoint)) {
                        throw Error('inputPoint is mandatory.');
                    }
                    if (!(inputPoint instanceof Acad.Point2d)) {
                        throw TypeError('inputPoint should be of type Acad.Point2d');
                    }
                    var jsonObj = AutoCAD.CurrentViewportInterop.pointToWorld(inputPoint);
                    return new Acad.Point3d(jsonObj.x, jsonObj.y, jsonObj.z);
                }
                CurrentViewport.pointToWorld = pointToWorld;
                ;

                /*
                * Converts a UCS point to UCS
                * @param Input point is the UCS point of type Acad.Point3d
                * @return a WCS point of type Acad.Point3d
                */
                function ucsToWorld(inputPoint) {
                    if (!(inputPoint)) {
                        throw Error('inputPoint is mandatory.');
                    }
                    if (!(inputPoint instanceof Acad.Point3d)) {
                        throw TypeError('inputPoint should be of type Acad.Point3d');
                    }
                    var jsonObj = AutoCAD.CurrentViewportInterop.ucsToWorld(inputPoint);
                    return new Acad.Point3d(jsonObj.x, jsonObj.y, jsonObj.z);
                }
                CurrentViewport.ucsToWorld = ucsToWorld;
                ;

                /*
                * Converts a WCS point to UCS
                * @param Input point is the WCS point of type Acad.Point3d
                * @return a UCS point of type Acad.Point3d
                */
                function worldToUCS(inputPoint) {
                    if (!(inputPoint)) {
                        throw Error('inputPoint is mandatory.');
                    }
                    if (!(inputPoint instanceof Acad.Point3d)) {
                        throw TypeError('inputPoint should be of type Acad.Point3d');
                    }
                    var jsonObj = AutoCAD.CurrentViewportInterop.worldToUCS(inputPoint);
                    return new Acad.Point3d(jsonObj.x, jsonObj.y, jsonObj.z);
                }
                CurrentViewport.worldToUCS = worldToUCS;
                ;

                /*
                * This method retrieves the extents of the viewport in normalized device coordinates.
                * @return Acad.Rectangle2d object which has lowerLeft and upperRight as Acad.Point2d objects
                */
                function getViewport() {
                    var jsonObj = AutoCAD.CurrentViewportInterop.getViewport();
                    return new Acad.Rectangle2d(new Acad.Point2d(jsonObj.lowerLeft.x, jsonObj.lowerLeft.y), new Acad.Point2d(jsonObj.upperRight.x, jsonObj.upperRight.y));
                }
                CurrentViewport.getViewport = getViewport;
                ;

                /**
                * The Methods which returns the position, target , upVector, fieldWidth and fieldHeight of current viewport.
                * @return fieldHeight of type float
                */
                function getViewProperties() {
                    var jsonObj = AutoCAD.CurrentViewportInterop.getViewProperties();
                    var position = new Acad.Point3d(jsonObj.position.x, jsonObj.position.y, jsonObj.position.z);
                    var target = new Acad.Point3d(jsonObj.target.x, jsonObj.target.y, jsonObj.target.z);
                    var upVector = new Acad.Vector3d(jsonObj.upVector.x, jsonObj.upVector.y, jsonObj.upVector.z);
                    var fieldWidth = jsonObj.fieldWidth;
                    var fieldHeight = jsonObj.fieldHeight;
                    var projection = jsonObj.projection;
                    return new Acad.ViewProperties(position, target, upVector, fieldWidth, fieldHeight, projection);
                }
                CurrentViewport.getViewProperties = getViewProperties;
                ;

                Object.defineProperty(CurrentViewport, "position", {
                    get: function () {
                        var position = AutoCAD.CurrentViewportInterop.get_position();
                        return new Acad.Point3d(position.x, position.y, position.z);
                    },
                    set: function (val) {
                        throw Error(" You are not allowed to set this property");
                    }
                });

                Object.defineProperty(CurrentViewport, "target", {
                    get: function () {
                        var target = AutoCAD.CurrentViewportInterop.get_target();
                        return new Acad.Point3d(target.x, target.y, target.z);
                    },
                    set: function (val) {
                        throw Error(" You are not allowed to set this property");
                    }
                });

                Object.defineProperty(CurrentViewport, "upVector", {
                    get: function () {
                        var upVector = AutoCAD.CurrentViewportInterop.get_upVector();
                        return new Acad.Vector3d(upVector.x, upVector.y, upVector.z);
                    },
                    set: function (val) {
                        throw Error(" You are not allowed to set this property");
                    }
                });

                Object.defineProperty(CurrentViewport, "fieldWidth", {
                    get: function () {
                        return AutoCAD.CurrentViewportInterop.get_fieldWidth();
                    },
                    set: function (val) {
                        throw Error(" You are not allowed to set this property");
                    }
                });

                Object.defineProperty(CurrentViewport, "fieldHeight", {
                    get: function () {
                        return AutoCAD.CurrentViewportInterop.get_fieldHeight();
                    },
                    set: function (val) {
                        throw Error(" You are not allowed to set this property");
                    }
                });

                Object.defineProperty(CurrentViewport, "projection", {
                    get: function () {
                        return AutoCAD.CurrentViewportInterop.get_projection();
                    },
                    set: function (val) {
                        throw Error(" You are not allowed to set this property");
                    }
                });
            })(Editor.CurrentViewport || (Editor.CurrentViewport = {}));
            var CurrentViewport = Editor.CurrentViewport;
        })(AutoCAD.Editor || (AutoCAD.Editor = {}));
        var Editor = AutoCAD.Editor;
        ;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
//Common declarations referenced by generated code
var Autodesk;
(function (Autodesk) {
    (function (JavaScript) {
        var Promise = (function () {
            function Promise() {
            }
            Promise.prototype.then = function (success_, error_) {
                this.success = success_;
                this.error = error_;
            };
            return Promise;
        })();
        JavaScript.Promise = Promise;
        (function (ErrorStatus) {
            ErrorStatus[ErrorStatus["eOk"] = 0] = "eOk";
        })(JavaScript.ErrorStatus || (JavaScript.ErrorStatus = {}));
        var ErrorStatus = JavaScript.ErrorStatus;
    })(Autodesk.JavaScript || (Autodesk.JavaScript = {}));
    var JavaScript = Autodesk.JavaScript;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    (function (AutoCAD) {
        var Flags;
        (function (Flags) {
            Flags[Flags["RequiresDocument"] = 1] = "RequiresDocument";
        })(Flags || (Flags = {}));
        ;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (ActiveDocumentInterop) {
            function addObjectReactor(strObjIds) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.addObjectReactor',
                    functionParams: { strObjIds: strObjIds }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ActiveDocumentInterop.addObjectReactor = addObjectReactor;
            function removeObjectReactor(strObjIds) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.removeObjectReactor',
                    functionParams: { strObjIds: strObjIds }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ActiveDocumentInterop.removeObjectReactor = removeObjectReactor;
            function getHandles(objIds) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.getHandles',
                    functionParams: { objIds: objIds }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ActiveDocumentInterop.getHandles = getHandles;
            function getObjectSet(objHandles) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.getObjectSet',
                    functionParams: { objHandles: objHandles }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ActiveDocumentInterop.getObjectSet = getObjectSet;
            function capturePreview(nWidth, nHeight) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.capturePreview',
                    functionParams: { nWidth: nWidth, nHeight: nHeight }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ActiveDocumentInterop.capturePreview = capturePreview;

            function highlight(objIds) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.highlight',
                    functionParams: { objIds: objIds }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            ActiveDocumentInterop.highlight = highlight;

            function unhighlight(objIds) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_ActiveDocumentInterop.unhighlight',
                    functionParams: { objIds: objIds }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            ActiveDocumentInterop.unhighlight = unhighlight;

            var objectModified_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function objectModifiedCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var objectModifiedEventArgs = obj.objectModifiedEventArgs;

                for (var i = 0; i < objectModified_handlers.length; ++i)
                    objectModified_handlers[i](objectModifiedEventArgs);
            }

            //allows user to supply a callback
            function addHandler_objectModified(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (objectModified_handlers == null) {
                    objectModified_handlers = new Array();
                    registerCallback('Ac_ActiveDocumentInterop' + separator + 'objectModified', objectModifiedCallback);
                }
                objectModified_handlers.push(userFunction);
            }
            ActiveDocumentInterop.addHandler_objectModified = addHandler_objectModified;

            var objectErased_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function objectErasedCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var objectErasedEventArgs = obj.objectErasedEventArgs;

                for (var i = 0; i < objectErased_handlers.length; ++i)
                    objectErased_handlers[i](objectErasedEventArgs);
            }

            //allows user to supply a callback
            function addHandler_objectErased(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (objectErased_handlers == null) {
                    objectErased_handlers = new Array();
                    registerCallback('Ac_ActiveDocumentInterop' + separator + 'objectErased', objectErasedCallback);
                }
                objectErased_handlers.push(userFunction);
            }
            ActiveDocumentInterop.addHandler_objectErased = addHandler_objectErased;
        })(AutoCAD.ActiveDocumentInterop || (AutoCAD.ActiveDocumentInterop = {}));
        var ActiveDocumentInterop = AutoCAD.ActiveDocumentInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (ApplicationInterop) {
            function doEvents() {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.doEvents',
                    functionParams: {}
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.doEvents = doEvents;
            function showTaskDialog(strWindowTitle, strMainInstruction, strContentText, nCommonButtons) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.showTaskDialog',
                    functionParams: { strWindowTitle: strWindowTitle, strMainInstruction: strMainInstruction, strContentText: strContentText, nCommonButtons: nCommonButtons }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.showTaskDialog = showTaskDialog;
            function showDeleteConfirmationTaskDialog(strTitle, strMessage) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.showDeleteConfirmationTaskDialog',
                    functionParams: { strTitle: strTitle, strMessage: strMessage }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.showDeleteConfirmationTaskDialog = showDeleteConfirmationTaskDialog;
            function showHTMLDialog(url, options) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.showHTMLDialog',
                    functionParams: { url: url, options: options }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.showHTMLDialog = showHTMLDialog;
            function showModalDialog(url) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.showModalDialog',
                    functionParams: { url: url }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.showModalDialog = showModalDialog;
            function addDocWindow(title, url) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.addDocWindow',
                    functionParams: { title: title, url: url }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.addDocWindow = addDocWindow;
            function modalDialogCommit(value) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.modalDialogCommit',
                    functionParams: { value: value }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.modalDialogCommit = modalDialogCommit;
            function addPalette(paletteName, url) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.addPalette',
                    functionParams: { paletteName: paletteName, url: url }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.addPalette = addPalette;

            function showTooltip(position, tooltip) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.showTooltip',
                    functionParams: { position: position, tooltip: tooltip }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            ApplicationInterop.showTooltip = showTooltip;

            function hideTooltip(tooltipId) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.hideTooltip',
                    functionParams: { tooltipId: tooltipId }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            ApplicationInterop.hideTooltip = hideTooltip;
            function displayContextMenu(x, y, menu) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_ApplicationInterop.displayContextMenu',
                    functionParams: { x: x, y: y, menu: menu }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            ApplicationInterop.displayContextMenu = displayContextMenu;

            var applicationReadyEvent_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function applicationReadyEventCallback(args) {
                var obj = JSON.parse(args);

                for (var i = 0; i < applicationReadyEvent_handlers.length; ++i)
                    applicationReadyEvent_handlers[i]();
            }

            //allows user to supply a callback
            function addHandler_applicationReadyEvent(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (applicationReadyEvent_handlers == null) {
                    applicationReadyEvent_handlers = new Array();
                    registerCallback('Ac_ApplicationInterop' + separator + 'applicationReadyEvent', applicationReadyEventCallback);
                }
                applicationReadyEvent_handlers.push(userFunction);
            }
            ApplicationInterop.addHandler_applicationReadyEvent = addHandler_applicationReadyEvent;
        })(AutoCAD.ApplicationInterop || (AutoCAD.ApplicationInterop = {}));
        var ApplicationInterop = AutoCAD.ApplicationInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (CurrentViewportInterop) {
            function dolly(dollyVector, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.dolly',
                    functionParams: { dollyVector: dollyVector, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.dolly = dolly;

            function roll(rollAngle, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.roll',
                    functionParams: { rollAngle: rollAngle, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.roll = roll;

            function orbit(angleX, angleY, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.orbit',
                    functionParams: { angleX: angleX, angleY: angleY, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.orbit = orbit;

            function pan(angleX, angleY, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.pan',
                    functionParams: { angleX: angleX, angleY: angleY, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.pan = pan;

            function zoomExtents(minPoint, maxPoint, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.zoomExtents',
                    functionParams: { minPoint: minPoint, maxPoint: maxPoint, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.zoomExtents = zoomExtents;

            function zoom(zoomFactor, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.zoom',
                    functionParams: { zoomFactor: zoomFactor, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.zoom = zoom;

            function zoomWindow(lowerLeft, upperRight, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.zoomWindow',
                    functionParams: { lowerLeft: lowerLeft, upperRight: upperRight, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.zoomWindow = zoomWindow;

            function pointToScreen(inputPoint) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.pointToScreen',
                    functionParams: { inputPoint: inputPoint }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.pointToScreen = pointToScreen;

            function pointToWorld(inputPoint) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.pointToWorld',
                    functionParams: { inputPoint: inputPoint }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.pointToWorld = pointToWorld;

            function ucsToWorld(inputPoint) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.ucsToWorld',
                    functionParams: { inputPoint: inputPoint }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.ucsToWorld = ucsToWorld;

            function worldToUCS(inputPoint) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.worldToUCS',
                    functionParams: { inputPoint: inputPoint }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.worldToUCS = worldToUCS;

            function setView(position, target, upVector, fieldWidth, fieldHeight, projection, animate) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.setView',
                    functionParams: { position: position, target: target, upVector: upVector, fieldWidth: fieldWidth, fieldHeight: fieldHeight, projection: projection, animate: animate }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.setView = setView;

            function getViewport() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.getViewport',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.getViewport = getViewport;

            function getViewProperties() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.getViewProperties',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.getViewProperties = getViewProperties;

            function get_position() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.get_position',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.get_position = get_position;

            function get_target() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.get_target',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.get_target = get_target;

            function get_upVector() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.get_upVector',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.get_upVector = get_upVector;

            function get_fieldWidth() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.get_fieldWidth',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.get_fieldWidth = get_fieldWidth;

            function get_fieldHeight() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.get_fieldHeight',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.get_fieldHeight = get_fieldHeight;

            function get_projection() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.get_projection',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.get_projection = get_projection;

            function getViewport3D(viewprop) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.getViewport3D',
                    functionParams: { viewprop: viewprop }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.getViewport3D = getViewport3D;

            function convertViewport3D(viewport3d) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_CurrentViewportInterop.convertViewport3D',
                    functionParams: { viewport3d: viewport3d }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            CurrentViewportInterop.convertViewport3D = convertViewport3D;
        })(AutoCAD.CurrentViewportInterop || (AutoCAD.CurrentViewportInterop = {}));
        var CurrentViewportInterop = AutoCAD.CurrentViewportInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (DataItemCollectionManagerInterop) {
            function getKnownCollection(colName) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_DataItemCollectionManagerInterop.getKnownCollection',
                    functionParams: { colName: colName }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            DataItemCollectionManagerInterop.getKnownCollection = getKnownCollection;

            var resetEvent_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function resetEventCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var eventArgs = obj.eventArgs;

                for (var i = 0; i < resetEvent_handlers.length; ++i)
                    resetEvent_handlers[i](eventArgs);
            }

            //allows user to supply a callback
            function addHandler_resetEvent(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (resetEvent_handlers == null) {
                    resetEvent_handlers = new Array();
                    registerCallback('Ac_DataItemCollectionManagerInterop' + separator + 'resetEvent', resetEventCallback);
                }
                resetEvent_handlers.push(userFunction);
            }
            DataItemCollectionManagerInterop.addHandler_resetEvent = addHandler_resetEvent;

            var collectionChangedEvent_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function collectionChangedEventCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var eventArgs = obj.eventArgs;

                for (var i = 0; i < collectionChangedEvent_handlers.length; ++i)
                    collectionChangedEvent_handlers[i](eventArgs);
            }

            //allows user to supply a callback
            function addHandler_collectionChangedEvent(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (collectionChangedEvent_handlers == null) {
                    collectionChangedEvent_handlers = new Array();
                    registerCallback('Ac_DataItemCollectionManagerInterop' + separator + 'collectionChangedEvent', collectionChangedEventCallback);
                }
                collectionChangedEvent_handlers.push(userFunction);
            }
            DataItemCollectionManagerInterop.addHandler_collectionChangedEvent = addHandler_collectionChangedEvent;

            var itemsChangedEvent_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function itemsChangedEventCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var eventArgs = obj.eventArgs;

                for (var i = 0; i < itemsChangedEvent_handlers.length; ++i)
                    itemsChangedEvent_handlers[i](eventArgs);
            }

            //allows user to supply a callback
            function addHandler_itemsChangedEvent(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (itemsChangedEvent_handlers == null) {
                    itemsChangedEvent_handlers = new Array();
                    registerCallback('Ac_DataItemCollectionManagerInterop' + separator + 'itemsChangedEvent', itemsChangedEventCallback);
                }
                itemsChangedEvent_handlers.push(userFunction);
            }
            DataItemCollectionManagerInterop.addHandler_itemsChangedEvent = addHandler_itemsChangedEvent;
        })(AutoCAD.DataItemCollectionManagerInterop || (AutoCAD.DataItemCollectionManagerInterop = {}));
        var DataItemCollectionManagerInterop = AutoCAD.DataItemCollectionManagerInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (DataItemInterop) {
            function getProperties(id) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_DataItemInterop.getProperties',
                    functionParams: { id: id }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            DataItemInterop.getProperties = getProperties;
        })(AutoCAD.DataItemInterop || (AutoCAD.DataItemInterop = {}));
        var DataItemInterop = AutoCAD.DataItemInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (DBEntityInterop) {
            function getExtents(entityId) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_DBEntityInterop.getExtents',
                    functionParams: { entityId: entityId }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            DBEntityInterop.getExtents = getExtents;

            function getProperties(entityId) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_DBEntityInterop.getProperties',
                    functionParams: { entityId: entityId }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            DBEntityInterop.getProperties = getProperties;
        })(AutoCAD.DBEntityInterop || (AutoCAD.DBEntityInterop = {}));
        var DBEntityInterop = AutoCAD.DBEntityInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (EditorInterop) {
            function captureView() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_EditorInterop.captureView',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            EditorInterop.captureView = captureView;

            function restoreView(viewId) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_EditorInterop.restoreView',
                    functionParams: { viewId: viewId }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            EditorInterop.restoreView = restoreView;

            function executeCommand(commands, onSuccess, onError) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_EditorInterop.executeCommand',
                    functionParams: { commands: commands, onSuccess: onSuccess, onError: onError }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            EditorInterop.executeCommand = executeCommand;

            function addCommand(groupName, globalName, localName, flags) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_EditorInterop.addCommand',
                    functionParams: { groupName: groupName, globalName: globalName, localName: localName, flags: flags }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            EditorInterop.addCommand = addCommand;

            function cancelCommand() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_EditorInterop.cancelCommand',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            EditorInterop.cancelCommand = cancelCommand;

            function isQuiescent() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_EditorInterop.isQuiescent',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            EditorInterop.isQuiescent = isQuiescent;
            function getInteger(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getInteger',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getInteger = getInteger;
            function getDouble(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getDouble',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getDouble = getDouble;
            function getDistance(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getDistance',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getDistance = getDistance;
            function getAngle(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getAngle',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getAngle = getAngle;
            function getKeywords(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getKeywords',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getKeywords = getKeywords;
            function getString(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getString',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getString = getString;
            function getPoint(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getPoint',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getPoint = getPoint;
            function getCorner(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getCorner',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getCorner = getCorner;
            function getEntity(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getEntity',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getEntity = getEntity;
            function getNestedEntity(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getNestedEntity',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getNestedEntity = getNestedEntity;
            function getSelection(promptOpts) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getSelection',
                    functionParams: { promptOpts: promptOpts }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getSelection = getSelection;
            function dragDistance(jigOptions) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.dragDistance',
                    functionParams: { jigOptions: jigOptions }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.dragDistance = dragDistance;
            function dragAngle(jigOptions) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.dragAngle',
                    functionParams: { jigOptions: jigOptions }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.dragAngle = dragAngle;
            function dragString(jigOptions) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.dragString',
                    functionParams: { jigOptions: jigOptions }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.dragString = dragString;
            function dragPoint(jigOptions) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.dragPoint',
                    functionParams: { jigOptions: jigOptions }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.dragPoint = dragPoint;
            function getFileNameForOpen(options) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getFileNameForOpen',
                    functionParams: { options: options }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getFileNameForOpen = getFileNameForOpen;
            function getFileNameForSave(options) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_EditorInterop.getFileNameForSave',
                    functionParams: { options: options }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            EditorInterop.getFileNameForSave = getFileNameForSave;

            var commandEndedEvent_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function commandEndedEventCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var command = obj.command;

                for (var i = 0; i < commandEndedEvent_handlers.length; ++i)
                    commandEndedEvent_handlers[i](command);
            }

            //allows user to supply a callback
            function addHandler_commandEndedEvent(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (commandEndedEvent_handlers == null) {
                    commandEndedEvent_handlers = new Array();
                    registerCallback('Ac_EditorInterop' + separator + 'commandEndedEvent', commandEndedEventCallback);
                }
                commandEndedEvent_handlers.push(userFunction);
            }
            EditorInterop.addHandler_commandEndedEvent = addHandler_commandEndedEvent;
        })(AutoCAD.EditorInterop || (AutoCAD.EditorInterop = {}));
        var EditorInterop = AutoCAD.EditorInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (JigInterop) {
            function update(xmlData) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_JigInterop.update',
                    functionParams: { xmlData: xmlData }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            JigInterop.update = update;

            var updateEvent_handler = null;

            //called by native code: fires event to callback supplied by the user
            function updateEventCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var eventArgs = obj.eventArgs;

                //call the one and only event handler for this singlecast event
                updateEvent_handler(eventArgs);
            }

            //allows user to supply a callback
            function setHandler_updateEvent(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (updateEvent_handler == null) {
                    registerCallback('Ac_JigInterop' + separator + 'updateEvent', updateEventCallback);
                }
                updateEvent_handler = userFunction;
            }
            JigInterop.setHandler_updateEvent = setHandler_updateEvent;
        })(AutoCAD.JigInterop || (AutoCAD.JigInterop = {}));
        var JigInterop = AutoCAD.JigInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (Logger) {
            function get_isLoggingEnabled() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_Logger.get_isLoggingEnabled',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            Logger.get_isLoggingEnabled = get_isLoggingEnabled;
            function logFatal(msg) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.logFatal',
                    functionParams: { msg: msg }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.logFatal = logFatal;
            function logError(msg) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.logError',
                    functionParams: { msg: msg }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.logError = logError;
            function logWarn(msg) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.logWarn',
                    functionParams: { msg: msg }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.logWarn = logWarn;
            function logInfo(msg) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.logInfo',
                    functionParams: { msg: msg }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.logInfo = logInfo;
            function logDebug(msg) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.logDebug',
                    functionParams: { msg: msg }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.logDebug = logDebug;
            function logTrace(msg) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.logTrace',
                    functionParams: { msg: msg }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.logTrace = logTrace;

            function get_logLevel() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_Logger.get_logLevel',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            Logger.get_logLevel = get_logLevel;
            function set_logLevel(value) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_Logger.set_logLevel',
                    functionParams: { value: value }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            Logger.set_logLevel = set_logLevel;
        })(AutoCAD.Logger || (AutoCAD.Logger = {}));
        var Logger = AutoCAD.Logger;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (SecureFileInterop) {
            function getContents(guid) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_SecureFileInterop.getContents',
                    functionParams: { guid: guid }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            SecureFileInterop.getContents = getContents;

            function getFileSize(guid) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_SecureFileInterop.getFileSize',
                    functionParams: { guid: guid }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            SecureFileInterop.getFileSize = getFileSize;

            function setContents(guid, contents) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_SecureFileInterop.setContents',
                    functionParams: { guid: guid, contents: contents }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            SecureFileInterop.setContents = setContents;

            function release(guid) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_SecureFileInterop.release',
                    functionParams: { guid: guid }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            SecureFileInterop.release = release;
        })(AutoCAD.SecureFileInterop || (AutoCAD.SecureFileInterop = {}));
        var SecureFileInterop = AutoCAD.SecureFileInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (SysVarCollectionInterop) {
            function getSysVar(varName) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_SysVarCollectionInterop.getSysVar',
                    functionParams: { varName: varName }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            SysVarCollectionInterop.getSysVar = getSysVar;

            function setSysVarValue(varName, sysVarValueInterop) {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_SysVarCollectionInterop.setSysVarValue',
                    functionParams: { varName: varName, sysVarValueInterop: sysVarValueInterop }
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            SysVarCollectionInterop.setSysVarValue = setSysVarValue;
            function postSysVarValue(varName, sysVarValueInterop) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_SysVarCollectionInterop.postSysVarValue',
                    functionParams: { varName: varName, sysVarValueInterop: sysVarValueInterop }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            SysVarCollectionInterop.postSysVarValue = postSysVarValue;
            function addSysVarReactor(varNames) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_SysVarCollectionInterop.addSysVarReactor',
                    functionParams: { varNames: varNames }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            SysVarCollectionInterop.addSysVarReactor = addSysVarReactor;
            function removeSysVarReactor(varNames) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_SysVarCollectionInterop.removeSysVarReactor',
                    functionParams: { varNames: varNames }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            SysVarCollectionInterop.removeSysVarReactor = removeSysVarReactor;

            var sysVarChanged_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function sysVarChangedCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var sysVarsChanged = obj.sysVarsChanged;

                for (var i = 0; i < sysVarChanged_handlers.length; ++i)
                    sysVarChanged_handlers[i](sysVarsChanged);
            }

            //allows user to supply a callback
            function addHandler_sysVarChanged(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (sysVarChanged_handlers == null) {
                    sysVarChanged_handlers = new Array();
                    registerCallback('Ac_SysVarCollectionInterop' + separator + 'sysVarChanged', sysVarChangedCallback);
                }
                sysVarChanged_handlers.push(userFunction);
            }
            SysVarCollectionInterop.addHandler_sysVarChanged = addHandler_sysVarChanged;
        })(AutoCAD.SysVarCollectionInterop || (AutoCAD.SysVarCollectionInterop = {}));
        var SysVarCollectionInterop = AutoCAD.SysVarCollectionInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));
var Autodesk;
(function (Autodesk) {
    //---start of generated typescript---
    //
    //////////////////////////////////////////////////////////////////////////////
    //
    // (C) Copyright 2012 by Autodesk, Inc.
    //
    // The information contained herein is confidential, proprietary to Autodesk,
    // Inc., and considered a trade secret as defined in section 499C of the
    // penal code of the State of California.  Use of this information by anyone
    // other than authorized employees of Autodesk, Inc. is granted only under a
    // written non-disclosure agreement, expressly prescribing the scope and
    // manner of such use.
    //
    //////////////////////////////////////////////////////////////////////////////
    // Include TS files
    ///<reference path="CommonTypes.ts"/>
    (function (AutoCAD) {
        (function (TransientManagerInterop) {
            function addTransient(id, xmlData) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.addTransient',
                    functionParams: { id: id, xmlData: xmlData }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.addTransient = addTransient;
            function updateTransient(id, xmlData) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.updateTransient',
                    functionParams: { id: id, xmlData: xmlData }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.updateTransient = updateTransient;
            function eraseTransient(id) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.eraseTransient',
                    functionParams: { id: id }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.eraseTransient = eraseTransient;
            function eraseTransients(ids) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.eraseTransients',
                    functionParams: { ids: ids }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.eraseTransients = eraseTransients;

            function getNewTransientId() {
                var jsonStr = exec(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.getNewTransientId',
                    functionParams: {}
                }));
                var jsonObj = JSON.parse(jsonStr);

                if (jsonObj.retCode == undefined)
                    throw TypeError("Internal error: retCode is not present.");
                if (jsonObj.retCode != Autodesk.JavaScript.ErrorStatus.eOk) {
                    throw jsonObj;
                }
                if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                    return jsonObj.retValue;
                } else {
                    if (jsonObj.retValue)
                        return JSON.parse(jsonObj.retValue);
                    return jsonObj;
                }
            }
            TransientManagerInterop.getNewTransientId = getNewTransientId;
            function showTransients(ids, bShow) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.showTransients',
                    functionParams: { ids: ids, bShow: bShow }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.showTransients = showTransients;
            function getCursor(transientId) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.getCursor',
                    functionParams: { transientId: transientId }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.getCursor = getCursor;
            function setEventHandlingBehavior(id, eventName, bFilter) {
                var promise = new Autodesk.JavaScript.Promise();
                execAsync(JSON.stringify({
                    functionName: 'Ac_TransientManagerInterop.setEventHandlingBehavior',
                    functionParams: { id: id, eventName: eventName, bFilter: bFilter }
                }), function (result) {
                    if (typeof (promise.success) == 'function') {
                        var resObj = JSON.parse(result);
                        if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                            promise.success(resObj.retValue);
                        } else {
                            if (resObj.hasOwnProperty("retValue"))
                                promise.success(JSON.parse(resObj.retValue));
else
                                promise.success(resObj);
                        }
                    }
                }, function (result) {
                    if (typeof (promise.error) == 'function') {
                        var error = JSON.parse(result);

                        if (error.retCode == undefined)
                            throw TypeError("Internal error: retCode is not present.");

                        if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk)
                            throw "Internal error: retCode is eOk in error callback.";

                        if (error.retErrorString == undefined)
                            promise.error(error.retCode);
else
                            promise.error(error.retCode, error.retErrorString);
                    }
                });
                return promise;
            }
            TransientManagerInterop.setEventHandlingBehavior = setEventHandlingBehavior;

            var mouseChanged_handlers = null;

            //called by native code: fires event to callback supplied by the user
            function mouseChangedCallback(args) {
                var obj = JSON.parse(args);

                //unpack all event arguments
                var eventArgs = obj.eventArgs;

                for (var i = 0; i < mouseChanged_handlers.length; ++i)
                    mouseChanged_handlers[i](eventArgs);
            }

            //allows user to supply a callback
            function addHandler_mouseChanged(userFunction) {
                var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
                if (mouseChanged_handlers == null) {
                    mouseChanged_handlers = new Array();
                    registerCallback('Ac_TransientManagerInterop' + separator + 'mouseChanged', mouseChangedCallback);
                }
                mouseChanged_handlers.push(userFunction);
            }
            TransientManagerInterop.addHandler_mouseChanged = addHandler_mouseChanged;
        })(AutoCAD.TransientManagerInterop || (AutoCAD.TransientManagerInterop = {}));
        var TransientManagerInterop = AutoCAD.TransientManagerInterop;
    })(Autodesk.AutoCAD || (Autodesk.AutoCAD = {}));
    var AutoCAD = Autodesk.AutoCAD;
})(Autodesk || (Autodesk = {}));

// SIG // Begin signature block
// SIG // MIIZNgYJKoZIhvcNAQcCoIIZJzCCGSMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFKD+CygGHBtR
// SIG // HVJoGbhUBHRCyLEUoIIUMDCCA+4wggNXoAMCAQICEH6T
// SIG // 6/t8xk5Z6kuad9QG/DswDQYJKoZIhvcNAQEFBQAwgYsx
// SIG // CzAJBgNVBAYTAlpBMRUwEwYDVQQIEwxXZXN0ZXJuIENh
// SIG // cGUxFDASBgNVBAcTC0R1cmJhbnZpbGxlMQ8wDQYDVQQK
// SIG // EwZUaGF3dGUxHTAbBgNVBAsTFFRoYXd0ZSBDZXJ0aWZp
// SIG // Y2F0aW9uMR8wHQYDVQQDExZUaGF3dGUgVGltZXN0YW1w
// SIG // aW5nIENBMB4XDTEyMTIyMTAwMDAwMFoXDTIwMTIzMDIz
// SIG // NTk1OVowXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCxrLNJVEuXHBIK2CV5kSJXKm/cuCbEQ3Nrwr8uUFr7
// SIG // FMJ2jkMBJUO0oeJF9Oi3e8N0zCLXtJQAAvdN7b+0t0Qk
// SIG // a81fRTvRRM5DEnMXgotptCvLmR6schsmTXEfsTHd+1Fh
// SIG // AlOmqvVJLAV4RaUvic7nmef+jOJXPz3GktxK+Hsz5HkK
// SIG // +/B1iEGc/8UDUZmq12yfk2mHZSmDhcJgFMTIyTsU2sCB
// SIG // 8B8NdN6SIqvK9/t0fCfm90obf6fDni2uiuqm5qonFn1h
// SIG // 95hxEbziUKFL5V365Q6nLJ+qZSDT2JboyHylTkhE/xni
// SIG // RAeSC9dohIBdanhkRc1gRn5UwRN8xXnxycFxAgMBAAGj
// SIG // gfowgfcwHQYDVR0OBBYEFF+a9W5czMx0mtTdfe8/2+xM
// SIG // gC7dMDIGCCsGAQUFBwEBBCYwJDAiBggrBgEFBQcwAYYW
// SIG // aHR0cDovL29jc3AudGhhd3RlLmNvbTASBgNVHRMBAf8E
// SIG // CDAGAQH/AgEAMD8GA1UdHwQ4MDYwNKAyoDCGLmh0dHA6
// SIG // Ly9jcmwudGhhd3RlLmNvbS9UaGF3dGVUaW1lc3RhbXBp
// SIG // bmdDQS5jcmwwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDgYD
// SIG // VR0PAQH/BAQDAgEGMCgGA1UdEQQhMB+kHTAbMRkwFwYD
// SIG // VQQDExBUaW1lU3RhbXAtMjA0OC0xMA0GCSqGSIb3DQEB
// SIG // BQUAA4GBAAMJm495739ZMKrvaLX64wkdu0+CBl03X6ZS
// SIG // nxaN6hySCURu9W3rWHww6PlpjSNzCxJvR6muORH4KrGb
// SIG // sBrDjutZlgCtzgxNstAxpghcKnr84nodV0yoZRjpeUBi
// SIG // JZZux8c3aoMhCI5B6t3ZVz8dd0mHKhYGXqY4aiISo1EZ
// SIG // g362MIIEozCCA4ugAwIBAgIQDs/0OMj+vzVuBNhqmBsa
// SIG // UDANBgkqhkiG9w0BAQUFADBeMQswCQYDVQQGEwJVUzEd
// SIG // MBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xMDAu
// SIG // BgNVBAMTJ1N5bWFudGVjIFRpbWUgU3RhbXBpbmcgU2Vy
// SIG // dmljZXMgQ0EgLSBHMjAeFw0xMjEwMTgwMDAwMDBaFw0y
// SIG // MDEyMjkyMzU5NTlaMGIxCzAJBgNVBAYTAlVTMR0wGwYD
// SIG // VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjE0MDIGA1UE
// SIG // AxMrU3ltYW50ZWMgVGltZSBTdGFtcGluZyBTZXJ2aWNl
// SIG // cyBTaWduZXIgLSBHNDCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAKJjCzlEuLsjp0RJuw7/ofBhClOT
// SIG // sJjbrSwPSsVu/4Y8U1UPFc4EPyv9qZaW2b5heQtbyUyG
// SIG // duXgQ0sile7CK0PBn9hotI5AT+6FOLkRxSPyZFjwFTJv
// SIG // TlehroikAtcqHs1L4d1j1ReJMluwXplaqJ0oUA4X7pbb
// SIG // YTtFUR3PElYLkkf8q672Zj1HrHBy55LnX80QucSDZJQZ
// SIG // vSWA4ejSIqXQugJ6oXeTW2XD7hd0vEGGKtwITIySjJEt
// SIG // nndEH2jWqHR32w5bMotWizO92WPISZ06xcXqMwvS8aMb
// SIG // 9Iu+2bNXizveBKd6IrIkri7HcMW+ToMmCPsLvalPmQjh
// SIG // EChyqs0CAwEAAaOCAVcwggFTMAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMHMGCCsGAQUFBwEBBGcwZTAqBggrBgEFBQcw
// SIG // AYYeaHR0cDovL3RzLW9jc3Aud3Muc3ltYW50ZWMuY29t
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vdHMtYWlhLndzLnN5
// SIG // bWFudGVjLmNvbS90c3MtY2EtZzIuY2VyMDwGA1UdHwQ1
// SIG // MDMwMaAvoC2GK2h0dHA6Ly90cy1jcmwud3Muc3ltYW50
// SIG // ZWMuY29tL3Rzcy1jYS1nMi5jcmwwKAYDVR0RBCEwH6Qd
// SIG // MBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTIwHQYD
// SIG // VR0OBBYEFEbGaaMOShQe1UzaUmMXP142vA3mMB8GA1Ud
// SIG // IwQYMBaAFF+a9W5czMx0mtTdfe8/2+xMgC7dMA0GCSqG
// SIG // SIb3DQEBBQUAA4IBAQB4O7SRKgBM8I9iMDd4o4QnB28Y
// SIG // st4l3KDUlAOqhk4ln5pAAxzdzuN5yyFoBtq2MrRtv/Qs
// SIG // JmMz5ElkbQ3mw2cO9wWkNWx8iRbG6bLfsundIMZxD82V
// SIG // dNy2XN69Nx9DeOZ4tc0oBCCjqvFLxIgpkQ6A0RH83Vx2
// SIG // bk9eDkVGQW4NsOo4mrE62glxEPwcebSAe6xp9P2ctgwW
// SIG // K/F/Wwk9m1viFsoTgW0ALjgNqCmPLOGy9FqpAa8VnCwv
// SIG // SRvbIrvD/niUUcOGsYKIXfA9tFGheTMrLnu53CAJE3Hr
// SIG // ahlbz+ilMFcsiUk/uc9/yb8+ImhjU5q9aXSsxR08f5Lg
// SIG // w7wc2AR1MIIFhTCCBG2gAwIBAgIQKcFbP6rNUmpOZ708
// SIG // Tn4/8jANBgkqhkiG9w0BAQUFADCBtDELMAkGA1UEBhMC
// SIG // VVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYD
// SIG // VQQLExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTswOQYD
// SIG // VQQLEzJUZXJtcyBvZiB1c2UgYXQgaHR0cHM6Ly93d3cu
// SIG // dmVyaXNpZ24uY29tL3JwYSAoYykxMDEuMCwGA1UEAxMl
// SIG // VmVyaVNpZ24gQ2xhc3MgMyBDb2RlIFNpZ25pbmcgMjAx
// SIG // MCBDQTAeFw0xMjA3MjUwMDAwMDBaFw0xNTA5MjAyMzU5
// SIG // NTlaMIHIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2Fs
// SIG // aWZvcm5pYTETMBEGA1UEBxMKU2FuIFJhZmFlbDEWMBQG
// SIG // A1UEChQNQXV0b2Rlc2ssIEluYzE+MDwGA1UECxM1RGln
// SIG // aXRhbCBJRCBDbGFzcyAzIC0gTWljcm9zb2Z0IFNvZnR3
// SIG // YXJlIFZhbGlkYXRpb24gdjIxHzAdBgNVBAsUFkRlc2ln
// SIG // biBTb2x1dGlvbnMgR3JvdXAxFjAUBgNVBAMUDUF1dG9k
// SIG // ZXNrLCBJbmMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCoYmDrmd0Gq8ezSsDlfgaJFEFplNPNhWzM
// SIG // 2uFQaYAB/ggpQ11+N4B6ao+TqrNIWDIqt3JKhaU889nx
// SIG // l/7teWGwuOurstI2Z0bEDhXiXam/bicK2HVLyntliQ+6
// SIG // tT+nlgfN8tgB2NzM0BpE1YCnU2b6DwQw4V7BV+/F//83
// SIG // yGFOpePlumzXxNw9EKWkaq81slmmTxf7UxZgP9PGbLw8
// SIG // gLAPk4PTJI97+5BBqhkLb1YqSfWn3PNMfsNKhw/VwAN0
// SIG // dRKeM6H8SkOdz+osr+NyH86lsKQuics4fwK5uFSHQHsI
// SIG // t6Z0tqWvminRqceUi9ugRlGryh9X1ZqCqfL/ggdzYa3Z
// SIG // AgMBAAGjggF7MIIBdzAJBgNVHRMEAjAAMA4GA1UdDwEB
// SIG // /wQEAwIHgDBABgNVHR8EOTA3MDWgM6Axhi9odHRwOi8v
// SIG // Y3NjMy0yMDEwLWNybC52ZXJpc2lnbi5jb20vQ1NDMy0y
// SIG // MDEwLmNybDBEBgNVHSAEPTA7MDkGC2CGSAGG+EUBBxcD
// SIG // MCowKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3LnZlcmlz
// SIG // aWduLmNvbS9ycGEwEwYDVR0lBAwwCgYIKwYBBQUHAwMw
// SIG // cQYIKwYBBQUHAQEEZTBjMCQGCCsGAQUFBzABhhhodHRw
// SIG // Oi8vb2NzcC52ZXJpc2lnbi5jb20wOwYIKwYBBQUHMAKG
// SIG // L2h0dHA6Ly9jc2MzLTIwMTAtYWlhLnZlcmlzaWduLmNv
// SIG // bS9DU0MzLTIwMTAuY2VyMB8GA1UdIwQYMBaAFM+Zqep7
// SIG // JvRLyY6P1/AFJu/j0qedMBEGCWCGSAGG+EIBAQQEAwIE
// SIG // EDAWBgorBgEEAYI3AgEbBAgwBgEBAAEB/zANBgkqhkiG
// SIG // 9w0BAQUFAAOCAQEA2OkGvuiY7TyI6yVTQAYmTO+MpOFG
// SIG // C8MflHSbofJiuLxrS1KXbkzsAPFPPsU1ouftFhsXFtDQ
// SIG // 8rMTq/jwugTpbJUREV0buEkLl8AKRhYQTKBKg1I/puBv
// SIG // bkJocDE0pRwtBz3xSlXXEwyYPcbCOnrM3OZ5bKx1Qiii
// SIG // vixlcGWhO3ws904ssutPFf4mV5PDi3U2Yp1HgbBK/Um/
// SIG // FLr6YAYeZaA8KY1CfQEisF3UKTwm72d7S+fJf++SOGea
// SIG // K0kumehVcbavQJTOVebuZ9V+qU0nk1lMrqve9BnQK69B
// SIG // QqNZu77vCO0wm81cfynAxkOYKZG3idY47qPJOgXKkwmI
// SIG // 2+92ozCCBgowggTyoAMCAQICEFIA5aolVvwahu2WydRL
// SIG // M8cwDQYJKoZIhvcNAQEFBQAwgcoxCzAJBgNVBAYTAlVT
// SIG // MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEfMB0GA1UE
// SIG // CxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE6MDgGA1UE
// SIG // CxMxKGMpIDIwMDYgVmVyaVNpZ24sIEluYy4gLSBGb3Ig
// SIG // YXV0aG9yaXplZCB1c2Ugb25seTFFMEMGA1UEAxM8VmVy
// SIG // aVNpZ24gQ2xhc3MgMyBQdWJsaWMgUHJpbWFyeSBDZXJ0
// SIG // aWZpY2F0aW9uIEF1dGhvcml0eSAtIEc1MB4XDTEwMDIw
// SIG // ODAwMDAwMFoXDTIwMDIwNzIzNTk1OVowgbQxCzAJBgNV
// SIG // BAYTAlVTMRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEf
// SIG // MB0GA1UECxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE7
// SIG // MDkGA1UECxMyVGVybXMgb2YgdXNlIGF0IGh0dHBzOi8v
// SIG // d3d3LnZlcmlzaWduLmNvbS9ycGEgKGMpMTAxLjAsBgNV
// SIG // BAMTJVZlcmlTaWduIENsYXNzIDMgQ29kZSBTaWduaW5n
// SIG // IDIwMTAgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQD1I0tepdeKuzLp1Ff37+THJn6tGZj+qJ19
// SIG // lPY2axDXdYEwfwRof8srdR7NHQiM32mUpzejnHuA4Jnh
// SIG // 7jdNX847FO6G1ND1JzW8JQs4p4xjnRejCKWrsPvNamKC
// SIG // TNUh2hvZ8eOEO4oqT4VbkAFPyad2EH8nA3y+rn59wd35
// SIG // BbwbSJxp58CkPDxBAD7fluXF5JRx1lUBxwAmSkA8taEm
// SIG // qQynbYCOkCV7z78/HOsvlvrlh3fGtVayejtUMFMb32I0
// SIG // /x7R9FqTKIXlTBdOflv9pJOZf9/N76R17+8V9kfn+Bly
// SIG // 2C40Gqa0p0x+vbtPDD1X8TDWpjaO1oB21xkupc1+NC2J
// SIG // AgMBAAGjggH+MIIB+jASBgNVHRMBAf8ECDAGAQH/AgEA
// SIG // MHAGA1UdIARpMGcwZQYLYIZIAYb4RQEHFwMwVjAoBggr
// SIG // BgEFBQcCARYcaHR0cHM6Ly93d3cudmVyaXNpZ24uY29t
// SIG // L2NwczAqBggrBgEFBQcCAjAeGhxodHRwczovL3d3dy52
// SIG // ZXJpc2lnbi5jb20vcnBhMA4GA1UdDwEB/wQEAwIBBjBt
// SIG // BggrBgEFBQcBDARhMF+hXaBbMFkwVzBVFglpbWFnZS9n
// SIG // aWYwITAfMAcGBSsOAwIaBBSP5dMahqyNjmvDz4Bq1EgY
// SIG // LHsZLjAlFiNodHRwOi8vbG9nby52ZXJpc2lnbi5jb20v
// SIG // dnNsb2dvLmdpZjA0BgNVHR8ELTArMCmgJ6AlhiNodHRw
// SIG // Oi8vY3JsLnZlcmlzaWduLmNvbS9wY2EzLWc1LmNybDA0
// SIG // BggrBgEFBQcBAQQoMCYwJAYIKwYBBQUHMAGGGGh0dHA6
// SIG // Ly9vY3NwLnZlcmlzaWduLmNvbTAdBgNVHSUEFjAUBggr
// SIG // BgEFBQcDAgYIKwYBBQUHAwMwKAYDVR0RBCEwH6QdMBsx
// SIG // GTAXBgNVBAMTEFZlcmlTaWduTVBLSS0yLTgwHQYDVR0O
// SIG // BBYEFM+Zqep7JvRLyY6P1/AFJu/j0qedMB8GA1UdIwQY
// SIG // MBaAFH/TZafC3ey78DAJ80M5+gKvMzEzMA0GCSqGSIb3
// SIG // DQEBBQUAA4IBAQBWIuY0pMRhy0i5Aa1WqGQP2YyRxLvM
// SIG // DOWteqAif99HOEotbNF/cRp87HCpsfBP5A8MU/oVXv50
// SIG // mEkkhYEmHJEUR7BMY4y7oTTUxkXoDYUmcwPQqYxkbdxx
// SIG // kuZFBWAVWVE5/FgUa/7UpO15awgMQXLnNyIGCb4j6T9E
// SIG // mh7pYZ3MsZBc/D3SjaxCPWU21LQ9QCiPmxDPIybMSyDL
// SIG // kB9djEw0yjzY5TfWb6UgvTTrJtmuDefFmvehtCGRM2+G
// SIG // 6Fi7JXx0Dlj+dRtjP84xfJuPG5aexVN2hFucrZH6rO2T
// SIG // ul3IIVPCglNjrxINUIcRGz1UUpaKLJw9khoImgUux5Ol
// SIG // SJHTMYIEcjCCBG4CAQEwgckwgbQxCzAJBgNVBAYTAlVT
// SIG // MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEfMB0GA1UE
// SIG // CxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE7MDkGA1UE
// SIG // CxMyVGVybXMgb2YgdXNlIGF0IGh0dHBzOi8vd3d3LnZl
// SIG // cmlzaWduLmNvbS9ycGEgKGMpMTAxLjAsBgNVBAMTJVZl
// SIG // cmlTaWduIENsYXNzIDMgQ29kZSBTaWduaW5nIDIwMTAg
// SIG // Q0ECECnBWz+qzVJqTme9PE5+P/IwCQYFKw4DAhoFAKBw
// SIG // MBAGCisGAQQBgjcCAQwxAjAAMBkGCSqGSIb3DQEJAzEM
// SIG // BgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgor
// SIG // BgEEAYI3AgEVMCMGCSqGSIb3DQEJBDEWBBSI/UqHdkUS
// SIG // Hgg9VNTXVF61uC4wWjANBgkqhkiG9w0BAQEFAASCAQAs
// SIG // OtHSnEkQfJt9IxjmshozWzKuKbxRnQzXNIBTzs6dBeha
// SIG // glAN3SAyt/EVhvGQvklcdwI+BLAOB8u0xTwU6/mdjcSB
// SIG // 1TJQqOqokJSh/lW7nOT95HsfqF9j8IGuPtz5LxpM9cg6
// SIG // zQ7zaWgniLln0gGHt0fwtbHLQLdaffXfPmbn8/CExgAs
// SIG // S55MK7WmrgXTuFFwx77Uz+AKIftW8/pViE96+9MR3zFv
// SIG // xGDErgBNGBzlwfX+N4lYO65JMW89PuCdUeGCvVf7mxqc
// SIG // va7bNobOatUdMP9v0ABNtCL/+gc1o6NDFNgBwS+pAJ4+
// SIG // OUzGA3m9GyHeS1xT7IszDsDICigS03efoYICCzCCAgcG
// SIG // CSqGSIb3DQEJBjGCAfgwggH0AgEBMHIwXjELMAkGA1UE
// SIG // BhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0
// SIG // aW9uMTAwLgYDVQQDEydTeW1hbnRlYyBUaW1lIFN0YW1w
// SIG // aW5nIFNlcnZpY2VzIENBIC0gRzICEA7P9DjI/r81bgTY
// SIG // apgbGlAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzEL
// SIG // BgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE1MDIw
// SIG // NjA0NDMxN1owIwYJKoZIhvcNAQkEMRYEFMayzgn7GJaU
// SIG // pV+dQXeLZq73gFeiMA0GCSqGSIb3DQEBAQUABIIBABiS
// SIG // c1JttM4EyMIbwUHJGb5OaZ9YsK5JyMpBzbOVxpbHUjt4
// SIG // X5B/fihavJ20MkSxDVNtxa//APkyT5klqWUWmW9XZfTa
// SIG // 3on8MhJw7ppNbjFdbGK75wAfimngJmYwGuiUnB9PwXqw
// SIG // Lp3NYNZHMWMvbi2/yHK51/tkNY9ECGTG/s2+qjyrESai
// SIG // 5Ho34ncZiJ5SVjzU98gKQbuKTtJma6kcioCCL/jP0GZh
// SIG // /Q6HRYYTEx9gtRjlduruAN3mg3ES3Hd0GmalXzr+ARZj
// SIG // 9bRcAKt9FuMwlfh6ChAihkCACn8VLfJ2JY7tOeaPqHG8
// SIG // Sbs80TkumsAXN+HAUCeWweFw4feJxUo=
// SIG // End signature block
