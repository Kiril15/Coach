import instance from "../api/interceptors";
import { 
    UploadSignatureResponse,
    UpdateAvatarPayload, 
    UpdateAvatarResponse,
    CloudinaryUploadResponse, 
    UpdatePayload
} from "@/types/user.interface";

interface FileUploadPayload {
    uri: string;
    type: string;
    name: string;
}

const userService = {
    async getUploadSignature(): Promise<UploadSignatureResponse> {
        const response = await instance.get<UploadSignatureResponse>('user/upload-signature');
        return response.data;
    },

    async uploadToCloudinary(
        imageFile: FileUploadPayload, 
        signatureData: UploadSignatureResponse
    ): Promise<CloudinaryUploadResponse> {
        const formData = new FormData();
        
        formData.append('file', {
            uri: imageFile.uri,
            type: imageFile.type, 
            name: imageFile.name,
        } as any);
        
        formData.append('api_key', signatureData.apiKey);
        formData.append('timestamp', signatureData.timestamp.toString());
        formData.append('signature', signatureData.signature);
        formData.append('public_id', signatureData.publicId);
        formData.append('folder', signatureData.folder);

        const response = await fetch(signatureData.uploadUrl, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            let errorDetails = 'Unknown Cloudinary error.';
            try {
                const errorBody = await response.json();
                errorDetails = errorBody.error?.message || errorDetails;
            } catch (e) {
                errorDetails = response.statusText;
            }
            throw new Error(errorDetails);
        }

        return response.json();
    },

    async updateAvatar(data: UpdateAvatarPayload): Promise<UpdateAvatarResponse> {
        const response = await instance.post<UpdateAvatarResponse>('user/avatar', data);
        return response.data;
    },

    async updateExp(data: UpdatePayload) {
        const response = await instance.patch('user/update-exp', data)
        return response.data
    },

    async deleteUser() {
        const response = await instance.delete(`user`)
        return response.data
    }

    // async resetStreak() {
    //     const response = await instance.patch('user/reset-streak')
    //     return response.data
    // }
};

export default userService;