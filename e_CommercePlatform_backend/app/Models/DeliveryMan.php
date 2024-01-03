<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryMan extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'AddressName',
        'AddressGoogle',
        'area',
        'description',
        'nearBy',
        'street',
    ];
}
