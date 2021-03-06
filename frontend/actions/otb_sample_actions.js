import * as OTBSampleAPIUtil from '../util/otb_sample_api_util.js'

export const RECEIVE_OTB_SAMPLES = 'RECEIVE_OTB_SAMPLES';
export const RECEIVE_OTB_SAMPLE = "RECEIVE_OTB_SAMPLE";
export const REMOVE_OTB_SAMPLE = "REMOVE_OTB_SAMPLE";
export const RECEIVE_OTB_SAMPLE_ERRORS = "RECEIVE_OTB_SAMPLE_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveErrors = errors => ({
    type: RECEIVE_OTB_SAMPLE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 

const receiveOTBSamples = OTBSamples => {
    
 return {   type: RECEIVE_OTB_SAMPLES,
    OTBSamples
     }
}

const receiveOTBSample = OTBSample => ({
    type: RECEIVE_OTB_SAMPLE,
    OTBSample
})

const removeOTBSample = OTBSampleId => ({
    type: REMOVE_OTB_SAMPLE,
    OTBSampleId
})

export const fetchOTBSamples = () => dispatch => (
    OTBSampleAPIUtil.fetchOTBSamples()
        .then(OTBSamples => (dispatch(receiveOTBSamples(OTBSamples))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchOTBSample = id => dispatch => (
    OTBSampleAPIUtil.fetchOTBSample(id)
        .then(OTBSample => (dispatch(receiveAirTravel(OTBSample))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createOTBSample = OTBSample => dispatch => (
    OTBSampleAPIUtil.createOTBSample(OTBSample)
        .then(OTBSample => (dispatch(receiveOTBSample(OTBSample))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const updateOTBSample = OTBSample => dispatch => (
    OTBSampleAPIUtil.updateOTBSample(OTBSample)
        .then(OTBSample => (dispatch(receiveOTBSample(OTBSample))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteOTBSample = OTBSampleId => dispatch => (
    OTBSampleAPIUtil.deleteOTBSample(OTBSampleId)
        .then(() => dispatch(removeOTBSample(OTBSampleId)))
)