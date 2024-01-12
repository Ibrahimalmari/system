<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
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

    public function user(){
        return $this->belongsTo(User::class);
     }
     public function store(){
        return $this->belongsTo(Store::class);
     }
}
