<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Right extends Model
{
    use HasFactory;
    protected $fillable = ['file_id', 'user_id'];

    // Определение отношения "многие ко многим" с моделью User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function file()
    {
        return $this->belongsTo(File::class, 'file_id', 'id');
    }
}
