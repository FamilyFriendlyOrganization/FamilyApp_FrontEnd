import axios from "../utils/axiosCustom";

export const getFamily = () => axios.get('family')

export const createFamily = (family, user) => axios.post('family', {family, user})

export const getAllUser = () => axios.get('user')

export const getFamilyById = (id) => axios.get(`family/${id}`)

export const createInvite = (familyId) => axios.post(`invite/create?familyId=${familyId}`)