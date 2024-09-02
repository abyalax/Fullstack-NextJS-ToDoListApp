export const arrayTodo = [
    {
        text: "Membaca Buku",
        note: "Membaca Buku 1x",
        done: false,
        id: "ID_35",
        plannedAt: new Date("2024-09-01T12:00:00.000Z"),
        createdAt: new Date("2024-09-01T12:00:00.000Z"),
        updatedAt: new Date("2024-09-01T12:00:00.000Z")
    },
    {
        text: "Membuat Jadwal",
        note: "Jadwal Event",
        done: false,
        id: "ID_32",
        plannedAt: new Date("2024-09-01T12:00:00.000Z"),
        createdAt: new Date("2024-09-01T12:00:00.000Z"),
        updatedAt: new Date("2024-09-01T12:00:00.000Z")
    },
    {
        text: "Membuat planning bulan depan",
        note: "Dibuat lebih realistis",
        done: false,
        id: "ID_32",
        plannedAt: new Date("2024-09-01T12:00:00.000Z"),
        createdAt: new Date("2024-09-01T12:00:00.000Z"),
        updatedAt: new Date("2024-09-01T12:00:00.000Z")
    },
    {
        text: "Track Pencapaian Minggu ini",
        note: "Tulis di buku harian",
        done: false,
        id: "ID_32",
        plannedAt: new Date("2024-09-01T12:00:00.000Z"),
        createdAt: new Date("2024-09-01T12:00:00.000Z"),
        updatedAt: new Date("2024-09-01T12:00:00.000Z")
    },
    {
        text: "Learning React Framework",
        note: "Hooks, Context, etc",
        done: false,
        id: "ID_32",
        plannedAt: new Date("2024-09-01T12:00:00.000Z"),
        createdAt: new Date("2024-09-01T12:00:00.000Z"),
        updatedAt: new Date("2024-09-01T12:00:00.000Z")
    },
];

export type TodoType = {
    text: string,
    note: string
    done: boolean,
    id: string
    plannedAt: Date
    createdAt: Date
    updatedAt: Date
}