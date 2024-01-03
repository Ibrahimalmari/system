<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class SellerMan extends Authenticatable
{
    use HasFactory ,HasApiTokens , Notifiable ;

    protected $guard ='seller';
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',
        'gender',
        'phone',
        'PhotoOfPersonalID',
        'birthday',
        'personalNumber',
        'role_id',
    ];


    
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role(){
        return  $this->belongsTo(Role::class);
      }


}
