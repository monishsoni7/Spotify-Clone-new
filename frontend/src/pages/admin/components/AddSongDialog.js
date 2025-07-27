import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { axiosInstance } from "@/lib/axios";
import { useMusicStore } from "@/stores/useMusicStore";
import { Plus, Upload } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
const AddSongDialog = () => {
    const { albums } = useMusicStore();
    const [songDialogOpen, setSongDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [newSong, setNewSong] = useState({
        title: "",
        artist: "",
        album: "",
        duration: "0",
    });
    const [files, setFiles] = useState({
        audio: null,
        image: null,
    });
    const audioInputRef = useRef(null);
    const imageInputRef = useRef(null);
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if (!files.audio || !files.image) {
                return toast.error("Please upload both audio and image files");
            }
            const formData = new FormData();
            formData.append("title", newSong.title);
            formData.append("artist", newSong.artist);
            formData.append("duration", newSong.duration);
            if (newSong.album && newSong.album !== "none") {
                formData.append("albumId", newSong.album);
            }
            formData.append("audioFile", files.audio);
            formData.append("imageFile", files.image);
            await axiosInstance.post("/admin/songs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setNewSong({
                title: "",
                artist: "",
                album: "",
                duration: "0",
            });
            setFiles({
                audio: null,
                image: null,
            });
            toast.success("Song added successfully");
        }
        catch (error) {
            toast.error("Failed to add song: " + error.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs(Dialog, { open: songDialogOpen, onOpenChange: setSongDialogOpen, children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { className: 'bg-emerald-500 hover:bg-emerald-600 text-black', children: [_jsx(Plus, { className: 'mr-2 h-4 w-4' }), "Add Song"] }) }), _jsxs(DialogContent, { className: 'bg-zinc-900 border-zinc-700 max-h-[80vh] overflow-auto', children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Add New Song" }), _jsx(DialogDescription, { children: "Add a new song to your music library" })] }), _jsxs("div", { className: 'space-y-4 py-4', children: [_jsx("input", { type: 'file', accept: 'audio/*', ref: audioInputRef, hidden: true, onChange: (e) => setFiles((prev) => ({ ...prev, audio: e.target.files[0] })) }), _jsx("input", { type: 'file', ref: imageInputRef, className: 'hidden', accept: 'image/*', onChange: (e) => setFiles((prev) => ({ ...prev, image: e.target.files[0] })) }), _jsx("div", { className: 'flex items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer', onClick: () => imageInputRef.current?.click(), children: _jsx("div", { className: 'text-center', children: files.image ? (_jsxs("div", { className: 'space-y-2', children: [_jsx("div", { className: 'text-sm text-emerald-500', children: "Image selected:" }), _jsx("div", { className: 'text-xs text-zinc-400', children: files.image.name.slice(0, 20) })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: 'p-3 bg-zinc-800 rounded-full inline-block mb-2', children: _jsx(Upload, { className: 'h-6 w-6 text-zinc-400' }) }), _jsx("div", { className: 'text-sm text-zinc-400 mb-2', children: "Upload artwork" }), _jsx(Button, { variant: 'outline', size: 'sm', className: 'text-xs', children: "Choose File" })] })) }) }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Audio File" }), _jsx("div", { className: 'flex items-center gap-2', children: _jsx(Button, { variant: 'outline', onClick: () => audioInputRef.current?.click(), className: 'w-full', children: files.audio ? files.audio.name.slice(0, 20) : "Choose Audio File" }) })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Title" }), _jsx(Input, { value: newSong.title, onChange: (e) => setNewSong({ ...newSong, title: e.target.value }), className: 'bg-zinc-800 border-zinc-700' })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Artist" }), _jsx(Input, { value: newSong.artist, onChange: (e) => setNewSong({ ...newSong, artist: e.target.value }), className: 'bg-zinc-800 border-zinc-700' })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Duration (seconds)" }), _jsx(Input, { type: 'number', min: '0', value: newSong.duration, onChange: (e) => setNewSong({ ...newSong, duration: e.target.value || "0" }), className: 'bg-zinc-800 border-zinc-700' })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { className: 'text-sm font-medium', children: "Album (Optional)" }), _jsxs(Select, { value: newSong.album, onValueChange: (value) => setNewSong({ ...newSong, album: value }), children: [_jsx(SelectTrigger, { className: 'bg-zinc-800 border-zinc-700', children: _jsx(SelectValue, { placeholder: 'Select album' }) }), _jsxs(SelectContent, { className: 'bg-zinc-800 border-zinc-700', children: [_jsx(SelectItem, { value: 'none', children: "No Album (Single)" }), albums.map((album) => (_jsx(SelectItem, { value: album._id, children: album.title }, album._id)))] })] })] })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: 'outline', onClick: () => setSongDialogOpen(false), disabled: isLoading, children: "Cancel" }), _jsx(Button, { onClick: handleSubmit, disabled: isLoading, children: isLoading ? "Uploading..." : "Add Song" })] })] })] }));
};
export default AddSongDialog;
