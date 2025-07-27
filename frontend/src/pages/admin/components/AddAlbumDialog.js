import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { Plus, Upload } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
const AddAlbumDialog = () => {
    const [albumDialogOpen, setAlbumDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);
    const [newAlbum, setNewAlbum] = useState({
        title: "",
        artist: "",
        releaseYear: new Date().getFullYear(),
    });
    const [imageFile, setImageFile] = useState(null);
    const handleImageSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
        }
    };
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if (!imageFile) {
                return toast.error("Please upload an image");
            }
            const formData = new FormData();
            formData.append("title", newAlbum.title);
            formData.append("artist", newAlbum.artist);
            formData.append("releaseYear", newAlbum.releaseYear.toString());
            formData.append("imageFile", imageFile);
            await axiosInstance.post("/admin/albums", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setNewAlbum({
                title: "",
                artist: "",
                releaseYear: new Date().getFullYear(),
            });
            setImageFile(null);
            setAlbumDialogOpen(false);
            toast.success("Album created successfully");
        }
        catch (error) {
            toast.error("Failed to create album: " + error.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs(Dialog, { open: albumDialogOpen, onOpenChange: setAlbumDialogOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { className: 'bg-violet-500 hover:bg-violet-600 text-white', children: [_jsx(Plus, { className: 'mr-2 h-4 w-4' }), "Add Album"] }) }), _jsxs(DialogContent, { className: 'bg-zinc-900 border-zinc-700', children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Add New Album" }), _jsx(DialogDescription, { children: "Add a new album to your collection" })] }), _jsxs("div", { className: 'space-y-4 py-4', children: [_jsx("input", { type: 'file', ref: fileInputRef, onChange: handleImageSelect, accept: 'image/*', className: 'hidden' }), _jsx("div", { className: 'flex items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer', onClick: () => fileInputRef.current?.click(), children: _jsxs("div", { className: 'text-center', children: [_jsx("div", { className: 'p-3 bg-zinc-800 rounded-full inline-block mb-2', children: _jsx(Upload, { className: 'h-6 w-6 text-zinc-400' }) }), _jsx("div", { className: 'text-sm text-zinc-400 mb-2', children: imageFile ? imageFile.name : "Upload album artwork" }), _jsx(Button, { variant: 'outline', size: 'sm', className: 'text-xs', children: "Choose File" })] }) }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Album Title" }), _jsx(Input, { value: newAlbum.title, onChange: (e) => setNewAlbum({ ...newAlbum, title: e.target.value }), className: 'bg-zinc-800 border-zinc-700', placeholder: 'Enter album title' })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Artist" }), _jsx(Input, { value: newAlbum.artist, onChange: (e) => setNewAlbum({ ...newAlbum, artist: e.target.value }), className: 'bg-zinc-800 border-zinc-700', placeholder: 'Enter artist name' })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Release Year" }), _jsx(Input, { type: 'number', value: newAlbum.releaseYear, onChange: (e) => setNewAlbum({ ...newAlbum, releaseYear: parseInt(e.target.value) }), className: 'bg-zinc-800 border-zinc-700', placeholder: 'Enter release year', min: 1900, max: new Date().getFullYear() })] })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: 'outline', onClick: () => setAlbumDialogOpen(false), disabled: isLoading, children: "Cancel" }), _jsx(Button, { onClick: handleSubmit, className: 'bg-violet-500 hover:bg-violet-600', disabled: isLoading || !imageFile || !newAlbum.title || !newAlbum.artist, children: isLoading ? "Creating..." : "Add Album" })] })] })] }));
};
export default AddAlbumDialog;
