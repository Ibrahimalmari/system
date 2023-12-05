<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerMan extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'gender',
        'phone',
        'personal_identity_photo',
        'birthday',
        'personalNumber',
    ];


}
