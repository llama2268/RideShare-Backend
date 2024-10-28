"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const riderController = __importStar(require("../controllers/rider.controller"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post('/create_ride', auth_1.auth, riderController.createRide);
router.post('/join/:rideId', auth_1.auth, riderController.join_ride);
router.put('/ride/:rideId/ride_complete', auth_1.auth, riderController.ride_is_complete);
router.put('/ride/:rideId/update', auth_1.auth, riderController.updateRide);
router.delete('/ride/:rideId/delete', auth_1.auth, riderController.deleteRide);
router.delete('/ride/:rideId/passenger/leave', auth_1.auth, riderController.removePassengerFromRide);
exports.default = router;
