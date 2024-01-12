<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store_Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'store_id',
        'section_id',
    ];

    
}
